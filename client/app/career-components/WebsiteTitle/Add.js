/*
 *
 * Add
 *
 */

import React from "react";

import { connect } from "react-redux";
import SubPage from "../../components/Manager/SubPage";
import AddTitle from "../our-components/AddTitle/AddTitle";

class Add extends React.PureComponent {
  render() {
    const { history, titleFormData, formErrors, titleChange, addTitle } = this.props;

    return (
      <SubPage title='Add Title' actionTitle='Cancel' handleAction={() => history.goBack()}>
        <AddTitle
          titleFormData={titleFormData}
          formErrors={formErrors}
          titleChange={titleChange}
          addTitle={addTitle}
        />
      </SubPage>
    );
  }
}

export default Add;
