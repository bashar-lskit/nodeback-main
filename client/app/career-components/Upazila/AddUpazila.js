import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Input, Row } from "reactstrap";
import Button from "../../components/Common/Button";

const AddUpazila = () => {
  const history = useHistory();
  const [upazila, setUpaila] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(`/api/upazila/add`, { uName: upazila });
    if (response.data.success === true) {
      alert(`${response.data.message}`);
      setUpaila("");
      history.push("/dashboard/upazila");
    }
  };

  return (
    <div className='add-upazila'>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12'>
            <Input
              required
              type={"text"}
              label={"Name"}
              name={"name"}
              placeholder={"Upazila Name"}
              onChange={(e) => {
                setUpaila(e.target.value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='add-district-actions'>
          <Button type='submit' text='Add Upazila' />
        </div>
      </form>
    </div>
  );
};

export default AddUpazila;
