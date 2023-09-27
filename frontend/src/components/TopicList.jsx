import React from "react";
import TopicListItem from './TopicListItem';
import "../styles/TopicListItem.scss";
import "../styles/TopicList.scss";

const sampleDataForTopicList = [
  {
    id: "1",
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: "2",
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: "3",
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {/* Map through the sampleDataForTopicList and render each topic */}
      {sampleDataForTopicList.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default TopicList;
