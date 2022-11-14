import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Col, Input, Row } from "reactstrap";
import Button from "../../components/Common/Button";

const AddDistrict = () => {
  const history = useHistory();
  const [district, setDistrict] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(`/api/district/add`, { dName: district });
    if (response.data.success === true) {
      alert(`${response.data.message}`);
      setDistrict("");
      history.push("/dashboard/district");
    }
  };

  return (
    <div className='add-title'>
      <form onSubmit={handleSubmit} noValidate>
        <Row>
          <Col xs='12'>
            <Input
              required
              type={"text"}
              label={"Name"}
              name={"name"}
              placeholder={"District Name"}
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='add-district-actions'>
          <Button type='submit' text='Add District' />
        </div>
      </form>
    </div>
  );
};

export default AddDistrict;
