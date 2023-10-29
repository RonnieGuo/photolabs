import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { label, onClick, active } = props;

  return (
    <div className={`topic-list--item ${active ? "active" : ""}`} onClick={onClick}>
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem;