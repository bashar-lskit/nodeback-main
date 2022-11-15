/**
 *
 * EditBrand
 *
 */

import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { Row, Col, Input } from "reactstrap";
import Button from "../../components/Common/Button";

const EditUpazila = ({ pupzila }) => {
  const history = useHistory();
  const [upazila, setUpazila] = useState("");
  useEffect(() => {
    setUpazila(pupzila?.name);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUpazila();
  };

  //   update data
  const updateUpazila = async () => {
    const response = await axios.put(`/api/upazila/${pupzila._id}`, {
      upazila: upazila,
    });
    console.log("res", response.data);
    if (response.data.success === true) {
      alert(`${response.data.message}`);
      history.push("/dashboard/upazila");
    }
  };

  //   delete data
  const deleteUpazila = async (id) => {
    const proceed = window.confirm("Are you sure to Delete");
    if (proceed) {
      const response = await axios.delete(`/api/upazila/${id}`);
      if (response.data.success === true) {
        alert(`${response.data.message}`);
        history.push("/dashboard/upazila");
      }
    }
  };
  return (
    <div className='edit-brand'>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12'>
            <Input
              required
              type={"text"}
              label={"Name"}
              name={"name"}
              placeholder={"Upazila Name"}
              value={upazila}
              onChange={(e) => {
                setUpazila(e.target.value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='d-flex flex-column flex-md-row'>
          <Button type='submit' text='Save' className='mb-3 mb-md-0 mr-0 mr-md-3' />
          <Button variant='danger' text='Delete' onClick={() => deleteUpazila(pupzila._id)} />
        </div>
      </form>
    </div>
  );
};

export default EditUpazila;
