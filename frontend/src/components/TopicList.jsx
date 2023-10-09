import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics && topics.map((topicData, index) => (
        <TopicListItem key={index} dataForTopicListItem={topicData} />
      ))}
    </div>
  );
};

export default TopicList;
