/*
 *
 * Add
 *
 */

import React from "react";
import SubPage from "../../components/Manager/SubPage";
import AddUpazila from "./AddUpazila";


class Add extends React.PureComponent {
  render() {
    const { history} = this.props;

    return (
      <SubPage title='Add Upazila' actionTitle='Cancel' handleAction={() => history.goBack()}>
        <AddUpazila />
      </SubPage>
    );
  }
}

export default Add;
