import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { dataForTopicListItem, fetchPhotosByTopicId } = props;

  return (
    <div className="topic-list__item">
      <p onClick={() => fetchPhotosByTopicId(dataForTopicListItem.id)}>{dataForTopicListItem.title}</p>
    </div>
  );
};

export default TopicListItem;
