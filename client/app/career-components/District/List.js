/*
 *
 * List
 *
 */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import LoadingIndicator from "../../components/Common/LoadingIndicator";
import NotFound from "../../components/Common/NotFound";
import SubPage from "../../components/Manager/SubPage";
import { ROLE_ADMIN } from "../../constants";
import DistrictList from "./DistrictList";

const List = ({ history, user }) => {
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDistrict();
  }, []);

  const fetchDistrict = async () => {
    setLoading(true);
    const response = await axios.get(`/api/district/all`);
    setDistricts(response?.data?.data);
    setLoading(false);
  };


  return (
    <>
      <SubPage
        title={user.role === ROLE_ADMIN ? "Districts" : "District"}
        actionTitle={user.role === ROLE_ADMIN && "Add"}
        handleAction={() => history.push("/dashboard/district/add")}
      >
        <h3>District List </h3>
        {loading ? (
          <LoadingIndicator inline />
        ) : districts.length > 0 ? (
          <DistrictList districts={districts} />
        ) : (
          <NotFound message='no districts found.' />
        )}
      </SubPage>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.account.user,
  };
};

export default connect(mapStateToProps)(List);
