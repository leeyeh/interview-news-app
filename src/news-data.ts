export interface News {
  title: string;
  time: number;
}

const now = Date.now();

const NEWS_DATA: News[] = [
  {
    title: "Global Markets Rally Amid Economic Recovery",
    time: now - 1200,
  },
  {
    title: "Tech Giants Announce New AI Innovations",
    time: now - 3000,
  },
  {
    title: "Local Community Garden Flourishes in Spring",
    time: now - 9000,
  },
  {
    title: "New Study Reveals Health Benefits of Meditation",
    time: now - 18000,
  },
  {
    title: "Election Results: Key Takeaways from the Vote",
    time: now - 36000,
  },
  {
    title: "International Film Festival Highlights Emerging Directors",
    time: now - 72000,
  },
  {
    title: "Scientists Warn of Record-Breaking Heat Wave",
    time: now - 144000,
  },
  {
    title: "Charity Run Raises Funds for Local Schools",
    time: now - 288000,
  },
  {
    title: "Breakthrough in Renewable Energy Storage Announced",
    time: now - 576000,
  },
  {
    title: "Sports Update: Championship Match Ends in Dramatic Victory",
    time: now - 864000,
  },
];

export default NEWS_DATA;
