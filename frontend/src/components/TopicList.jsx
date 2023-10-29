import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, selectedTopic, setSelectedTopic }) => {
  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="top-nav-bar--topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          label={topic.title}
          link="#"
          onClick={() => handleTopicClick(topic)}
          active={selectedTopic && selectedTopic === topic.id}
        />
      ))}
    </div>
  );
  
};

export default TopicList;
