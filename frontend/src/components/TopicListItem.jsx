import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = ({ id, label, link, onClick }) => {
  const handleTopicClick = (event) => {
    event.preventDefault();
    onClick(id);
  };

  return (
    <div className="topic-list--item">
      <a key={id} id={id} label={label} href={link} onClick={handleTopicClick}>
        <span>{label}</span>
      </a>
    </div>
  );
};

export default TopicListItem;
