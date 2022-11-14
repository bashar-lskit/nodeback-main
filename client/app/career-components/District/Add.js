/*
 *
 * Add
 *
 */

import React from "react";
import SubPage from "../../components/Manager/SubPage";
import AddDistrict from "./AddDistrict";

class Add extends React.PureComponent {
  render() {
    const { history} = this.props;

    return (
      <SubPage title='Add District' actionTitle='Cancel' handleAction={() => history.goBack()}>
        <AddDistrict />
      </SubPage>
    );
  }
}

export default Add;
