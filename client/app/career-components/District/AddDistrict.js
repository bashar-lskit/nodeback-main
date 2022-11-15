import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { handleInputChange } from "react-select/dist/utils-2db2ca57.cjs.prod";
import { Col, FormFeedback, Input, Row } from "reactstrap";
import Button from "../../components/Common/Button";

const AddDistrict = () => {
  const history = useHistory();
  const [district, setDistrict] = useState("");
  const [required, setRequired] = useState(false);

  const handleChange = (e) => {
    setDistrict(e.target.value);
    if (district.length == "") {
      setRequired(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (district.length == "") {
      setRequired(true);
      return;
    } else {
      const response = await axios.post(`/api/district/add`, { dName: district });
      if (response.data.success === true) {
        alert(`${response.data.message}`);
        setDistrict("");
        history.push("/dashboard/district");
      }
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
                handleChange(e);
              }}
            />
            {required && <p className='text-danger'> Field is required</p>}
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
