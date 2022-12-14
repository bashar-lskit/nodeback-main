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
import TitleList from "../../career-components/our-components/TitleList/TitleList";

const List = ({ history, user }) => {
  const [websiteTitles, setWebsiteTitles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTitle();
  }, []);

  const fetchTitle = async () => {
    setLoading(true);
    const response = await axios.get(`/api/title/all`);
    setWebsiteTitles(response.data.titles);
    setLoading(false);
  };

  console.log("websiteTitles", websiteTitles);

  return (
    <>
      <SubPage
        title={user.role === ROLE_ADMIN ? "Titles" : "Title"}
        actionTitle={user.role === ROLE_ADMIN && "Add"}
        handleAction={() => history.push("/dashboard/title/add")}
      >
        <h3>Title List </h3>
        {loading ? (
          <LoadingIndicator inline />
        ) : websiteTitles.length > 0 ? (
          <TitleList titles={websiteTitles} />
        ) : (
          <NotFound message='no brands found.' />
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
