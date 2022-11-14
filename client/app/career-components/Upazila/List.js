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
import UpazilaList from "./UpazilaList";

const List = ({ history, user }) => {
  const [upazilas, setUpazilas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDistrict();
  }, []);

  const fetchDistrict = async () => {
    setLoading(true);
    const response = await axios.get(`/api/upazila/all`);
    setUpazilas(response.data.upazilas);
    setLoading(false);
  };


  return (
    <>
      <SubPage
        title={user.role === ROLE_ADMIN ? "Upazila" : "Upazila"}
        actionTitle={user.role === ROLE_ADMIN && "Add"}
        handleAction={() => history.push("/dashboard/upazila/add")}
      >
        <h3>Upazila List </h3>
        {loading ? (
          <LoadingIndicator inline />
        ) : upazilas.length > 0 ? (
          <UpazilaList upazilas={upazilas} />
        ) : (
          <NotFound message='no upazila found.' />
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
