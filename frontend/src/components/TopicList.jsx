import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((element) => {
        return (
          <TopicListItem
            key={element.id}
            topic={element.title}
            topicClicked={props.topicClicked}
            photoByTopic={props.photoByTopic}
            topicId={element.id}
          />
        );
      })}
    </div>
  );
};

export default TopicList;