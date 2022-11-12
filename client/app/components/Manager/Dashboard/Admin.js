/*
 *
 * Admin
 *
 */

import React from "react";

import { Switch, Route } from "react-router-dom";
import { Row, Col } from "reactstrap";
import AccountMenu from "../AccountMenu";
import Page404 from "../../Common/Page404";
import Account from "../../../containers/Account";
import AccountSecurity from "../../../containers/AccountSecurity";
import Users from "../../../containers/Users";
import Brand from "../../../containers/Brand";
import WebsiteTitle from "../../../career-components/WebsiteTitle/WebsiteTitle";

const Admin = (props) => {
  return (
    <div className='admin'>
      <Row>
        <Col xs='12' md='5' xl='3'>
          <AccountMenu {...props} />
        </Col>
        <Col xs='12' md='7' xl='9'>
          <div className='panel-body'>
            <Switch>
              <Route exact path='/dashboard' component={Account} />
              <Route path='/dashboard/security' component={AccountSecurity} />
              <Route path='/dashboard/brand' component={Brand} />
              <Route path='/dashboard/users' component={Users} />
              <Route path='/dashboard/title' component={WebsiteTitle} />
              <Route path='*' component={Page404} />
            </Switch>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
