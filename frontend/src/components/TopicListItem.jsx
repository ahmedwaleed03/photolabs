import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  const { dataForTopicListItem } = props;

  return (
    <div className="topic-list__item">
      <label>{dataForTopicListItem.title}</label>
    </div>
  );
};

export default TopicListItem;
