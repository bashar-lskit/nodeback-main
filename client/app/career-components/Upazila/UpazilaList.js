import React from "react";
import { Link } from "react-router-dom";

const UpazilaList = ({ upazilas }) => {
  return (
    <div className='b-list'>
      {upazilas.map((upazila, index) => (
        <Link
          to={`/dashboard/upazila/edit/${upazila._id}`}
          key={index}
          className='d-block mb-3 p-4 brand-box'
        >
          <div className='d-flex align-items-center justify-content-between mb-2'>
            <h4 className='mb-0'>{upazila.name}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default UpazilaList;
