import React from "react";
import { relativeTime } from "./relative-time-format";

// Context that provides a ticking Date value. The provider creates a single
// interval for the whole app to avoid multiple intervals when many components
// need relative time updates.

const RelativeTimeContext = React.createContext<Date | null>(null);

export const RelativeTimeProvider: React.FC<{ children: React.ReactNode; refreshIntervalMs?: number }> = ({
  children,
  refreshIntervalMs = 1000,
}) => {
  const [now, setNow] = React.useState<Date>(() => new Date());

  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), refreshIntervalMs);
    return () => clearInterval(id);
  }, [refreshIntervalMs]);

  return <RelativeTimeContext.Provider value={now}>{children}</RelativeTimeContext.Provider>;
};

// Hook that formats a provided date using the shared ticking `now` from
// context. Callers pass a Date | string | number and receive the formatted
// relative time string. This centralizes formatting and uses a single interval
// for the whole app.
export function useRelativeTime(date: Date | string | number): string {
  const now = React.useContext(RelativeTimeContext);
  if (now === null) {
    throw new Error(
      "useRelativeTime must be used within a RelativeTimeProvider. Wrap your app with <RelativeTimeProvider> or add the provider higher in the tree."
    );
  }

  // The hook reads `now` so it re-renders on each tick. Use the existing
  // relativeTime util and pass the current `now` to keep formatting logic in
  // one place.
  return relativeTime(date, { now });
}

export default RelativeTimeContext;
