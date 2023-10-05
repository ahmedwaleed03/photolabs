import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { dataForTopicListItem } = props;

  return (
    <div className="topic-list__item">
      <label>{dataForTopicListItem.title}</label>
    </div>
  );
};

export default TopicListItem;
