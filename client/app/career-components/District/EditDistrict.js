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

const EditDistrict = ({ pdistrict }) => {
  const history = useHistory();
  const [district, setDistrict] = useState("");
  useEffect(() => {
    setDistrict(pdistrict?.name);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateDistrict();
  };

  //   update data
  const updateDistrict = async () => {
    const response = await axios.put(`/api/district/${pdistrict._id}`, {
      district: district,
    });
    console.log("res", response.data);
    if (response.data.success === true) {
      alert(`${response.data.message}`);
      history.push("/dashboard/district");
    }
  };

  //   delete data
  const deleteDistrict = async (id) => {
    const proceed = window.confirm("Are you sure to Delete");
    if (proceed) {
      const response = await axios.delete(`/api/district/${id}`);
      if (response.data.success === true) {
        alert(`${response.data.message}`);
        history.push("/dashboard/district");
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
              placeholder={"District Name"}
              value={district}
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='d-flex flex-column flex-md-row'>
          <Button type='submit' text='Save' className='mb-3 mb-md-0 mr-0 mr-md-3' />
          <Button variant='danger' text='Delete' onClick={() => deleteDistrict(pdistrict._id)} />
        </div>
      </form>
    </div>
  );
};

export default EditDistrict;
