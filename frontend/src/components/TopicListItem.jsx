import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, topicId, topicClicked }) => (
  <div className="topic-list__item">
    <span onClick={() => topicClicked(topicId)}>{topic}</span>
  </div>
);

export default TopicListItem;
