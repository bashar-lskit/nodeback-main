import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import LoadingIndicator from "../../components/Common/LoadingIndicator";
import NotFound from "../../components/Common/NotFound";
import SubPage from "../../components/Manager/SubPage";

import EditUpazila from "./EditUpazila";

const Edit = () => {
  const history = useHistory();
  const { id } = useParams();
  const [upazila, setUpazila] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUpazila();
  }, []);

  const fetchUpazila = async () => {
    setLoading(true);
    const response = await axios.post(`/api/upazila/single`, { id: id });
    setUpazila(response?.data?.data);
    setLoading(false);
  };

  return (
    <SubPage title='Edit Upazila' actionTitle='Cancel' handleAction={history.goBack}>
      {loading ? (
        <LoadingIndicator inline />
      ) : id ? (
        <EditUpazila pupzila={upazila} />
      ) : (
        <NotFound message='no upazila found.' />
      )}
    </SubPage>
  );
};

export default Edit;
