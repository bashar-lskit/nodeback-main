import React from 'react';

const DistrictList = ({districts}) => {
    return (
      <div className='t-list'>
        {districts.map((district, index) => (
          <div key={index} className='d-flex align-items-center justify-content-between mb-2'>
            <h4 className='mb-0'>{district.name}</h4>
          </div>
        ))}
      </div>
    );
};

export default DistrictList;