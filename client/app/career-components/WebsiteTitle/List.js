/*
 *
 * List
 *
 */

import React from "react";

import { connect } from "react-redux";
import LoadingIndicator from "../../components/Common/LoadingIndicator";
import SubPage from "../../components/Manager/SubPage";
import { ROLE_ADMIN } from "../../constants";

class List extends React.PureComponent {
  componentDidMount() {}

  render() {
    const { history, brands, isLoading, user } = this.props;

    return (
      <>
        <SubPage
          title={user.role === ROLE_ADMIN ? "Titles" : "Title"}
          actionTitle={user.role === ROLE_ADMIN && "Add"}
          handleAction={() => history.push("/dashboard/title/add")}
        >
          <h3>title List here</h3>
          {/* {isLoading ? (
            <LoadingIndicator inline />
          ) : brands.length > 0 ? (
            <BrandList brands={brands} user={user} />
          ) : (
            <NotFound message='no brands found.' />
          )} */}
        </SubPage>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.account.user,
  };
};

export default connect(mapStateToProps)(List);
