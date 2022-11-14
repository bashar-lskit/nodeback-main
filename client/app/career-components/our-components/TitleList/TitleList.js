import React from "react";

const TitleList = (props) => {
  const { titles } = props;
  return (
    <div className='t-list'>
      {titles.map((title, index) => (
        <div key={index} className='d-flex align-items-center justify-content-between mb-2'>
          <h4 className='mb-0'>{title.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default TitleList;
