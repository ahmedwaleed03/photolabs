import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics, fetchPhotosByTopicId } = props;

  return (
    <div className="top-nav-bar__topic-list">
      {topics && topics.map((topicData, index) => (
        <TopicListItem key={index} dataForTopicListItem={topicData} fetchPhotosByTopicId={fetchPhotosByTopicId} />
      ))}
    </div>
  );
};

export default TopicList;
