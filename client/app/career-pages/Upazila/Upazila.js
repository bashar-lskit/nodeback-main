import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Add from "../../career-components/Upazila/Add";
import List from "../../career-components/Upazila/List";
import Page404 from "../../components/Common/Page404";
import { ROLE_ADMIN } from "../../constants";


const Upazila = (props) => {
  const { user } = props;
  return (
    <div className='upazila-dashboard'>
      <Switch>
        <Route exact path='/dashboard/upazila' component={List} />
        {/* <Route exact path='/dashboard/brand/edit/:id' component={Edit} /> */}
        {user.role === ROLE_ADMIN && <Route exact path='/dashboard/upazila/add' component={Add} />}
        <Route path='*' component={Page404} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.account.user,
  };
};

export default connect(mapStateToProps)(Upazila);
