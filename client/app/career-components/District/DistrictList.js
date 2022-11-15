import React from "react";
import { Link } from "react-router-dom";

const DistrictList = ({ districts }) => {
  return (
    <div className='b-list'>
      {districts.map((district, index) => (
        <Link
          to={`/dashboard/district/edit/${district._id}`}
          key={index}
          className='d-block mb-3 p-4 brand-box'
        >
          <div className='d-flex align-items-center justify-content-between mb-2'>
            <h4 className='mb-0'>{district.name}</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default DistrictList;
