import React from 'react';

const UpazilaList = ({upazilas}) => {
    return (
      <div className='t-list'>
        {upazilas.map((upazila, index) => (
          <div key={index} className='d-flex align-items-center justify-content-between mb-2'>
            <h4 className='mb-0'>{upazila.name}</h4>
          </div>
        ))}
      </div>
    );
};

export default UpazilaList;