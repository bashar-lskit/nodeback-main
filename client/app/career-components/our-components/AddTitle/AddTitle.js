import axios from "axios";
import React, { useState } from "react";
import { Col, Input, Row } from "reactstrap";
import Button from "../../../components/Common/Button";
// import Input from "../../../components/Common/Input";

const AddTitle = (props) => {
  const [title, setTitle] = useState("");
  const { titleFormData, formErrors, titleChange, addTitle } = props;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("title", title);
    const response = await axios.post(`/api/title/add`, { title: title });
    if (response.data.success === true) {
      alert(`${response.data.message}`);
      setTitle("");
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
              placeholder={"Title Name"}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='add-title-actions'>
          <Button type='submit' text='Add Title' />
        </div>
      </form>
    </div>
  );
};

export default AddTitle;
