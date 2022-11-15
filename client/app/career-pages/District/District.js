import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Add from "../../career-components/District/Add";
import Edit from "../../career-components/District/Edit";
import List from "../../career-components/District/List";
import Page404 from "../../components/Common/Page404";
import { ROLE_ADMIN } from "../../constants";

const District = (props) => {
  const { user } = props;
  return (
    <div className='brand-dashboard'>
      <Switch>
        <Route exact path='/dashboard/district' component={List} />
        <Route exact path='/dashboard/district/edit/:id' component={Edit} />
        {user.role === ROLE_ADMIN && <Route exact path='/dashboard/district/add' component={Add} />}
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

export default connect(mapStateToProps)(District);
