import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import LoadingIndicator from "../../components/Common/LoadingIndicator";
import NotFound from "../../components/Common/NotFound";
import SubPage from "../../components/Manager/SubPage";
import EditDistrict from "./EditDistrict";

const Edit = () => {
  const history = useHistory();
  const { id } = useParams();
  const [district, setDistrict] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDistrict();
  }, []);

  const fetchDistrict = async () => {
    setLoading(true);
    const response = await axios.post(`/api/district/single`, { id: id });
    setDistrict(response?.data?.data);
    setLoading(false);
  };

  return (
    <SubPage title='Edit District' actionTitle='Cancel' handleAction={history.goBack}>
      {loading ? (
        <LoadingIndicator inline />
      ) : id ? (
        <EditDistrict pdistrict={district} />
      ) : (
        <NotFound message='no district found.' />
      )}
    </SubPage>
  );
};

export default Edit;
