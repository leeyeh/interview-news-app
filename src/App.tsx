import React from "react";

import "./App.css";

import { relativeTime } from "./relative-time-format.ts";
import NEWS_DATA, {type News} from "./news-data.ts";

const News = React.memo(({ news }: { news: News }) => {
  return (
    <div>
      <h2>{news.title}</h2>
      <span>{relativeTime(news.time)}</span>
    </div>
  );
});

const NewsList = ({ list }: { list: News[] }) => {
  return list.map((news) => <News key={news.title} news={news} />);
};

const App = () => {
  return (
    <div className="App">
      <div>
        <h1>Latest News</h1>
        <NewsList list={NEWS_DATA} />
        <h1>Most Viewed News</h1>
        <NewsList list={NEWS_DATA} />
      </div>
    </div>
  );
};

export default App;
