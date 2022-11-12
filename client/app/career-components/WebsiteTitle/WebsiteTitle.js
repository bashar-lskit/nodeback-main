import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Page404 from "../../components/Common/Page404";
import Add from "./Add";
import { ROLE_ADMIN } from "../../constants";
import List from "./List";

const WebsiteTitle = (props) => {
  const { user } = props;
  console.log("user", user);
  return (
    <div className='title-dashboard'>
      <Switch>
        <Route exact path='/dashboard/title' component={List} />
        {/* <Route exact path='/dashboard/brand/edit/:id' component={Edit} /> */}
        {user.role === ROLE_ADMIN && <Route exact path='/dashboard/title/add' component={Add} />}
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
export default connect(mapStateToProps)(WebsiteTitle);
