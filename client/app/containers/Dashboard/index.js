/**
 *
 * Dashboard
 *
 */

import React from "react";

import { connect } from "react-redux";

import actions from "../../actions";
import { ROLE_ADMIN, ROLE_MEMBER } from "../../constants";
import dashboardLinks from "./links.json";
import Admin from "../../components/Manager/Dashboard/Admin";
import Customer from "../../components/Manager/Dashboard/Customer";
import LoadingIndicator from "../../components/Common/LoadingIndicator";

class Dashboard extends React.PureComponent {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    const { user, isLoading, isMenuOpen, toggleDashboardMenu } = this.props;

    return (
      <>
        {isLoading ? (
          <LoadingIndicator inline />
        ) : user.role === ROLE_ADMIN ? (
          <Admin
            isMenuOpen={isMenuOpen}
            links={dashboardLinks[ROLE_ADMIN]}
            toggleMenu={toggleDashboardMenu}
          />
        ) : (
          <Customer
            isMenuOpen={isMenuOpen}
            links={dashboardLinks[ROLE_MEMBER]}
            toggleMenu={toggleDashboardMenu}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.account.user,
    isLoading: state.account.isLoading,
    isMenuOpen: state.dashboard.isMenuOpen,
  };
};

export default connect(mapStateToProps, actions)(Dashboard);
