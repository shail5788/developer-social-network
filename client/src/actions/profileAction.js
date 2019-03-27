import axios from "axios";
import {
  GET_PROFILE,
  PROFILE_LOADING,
  CLEAR_CURRENT_PROFILE,
  GET_ERROR,
  SET_CURRENT_USER,
  UPDATE_EXPERIENCE,
  UPDATE_EDUCATION
} from "./type";

export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

export const createProfile = (profileData, history) => dispatch => {
  axios
    .post("/api/profile", profileData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERROR,
        payload: err.response.data
      })
    );
};
export const deleteMyAccount = () => dispatch => {
  axios
    .delete("/api/delete")
    .then(res =>
      dispatch({
        type: SET_CURRENT_USER,
        payload: {}
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERROR,
        payload: err.response.data
      })
    );
};
export const addExperience = (expData, history) => dispatch => {
  axios
    .post("/api/profile/experience", expData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERROR,
        payload: err.response.data
      })
    );
};
export const addEducation = (expData, history) => dispatch => {
  axios
    .post("/api/profile/education", expData)
    .then(res => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: GET_ERROR,
        payload: err.response.data
      })
    );
};
export const updateEexperience = (experience, profileID) => dispatch => {
  axios
    .put(`/api/profile/experience/${profileID}`, experience)
    .then(res =>
      dispatch({
        type: UPDATE_EXPERIENCE,
        payload: res.data
      })
    )
    .then(err =>
      dispatch({
        type: GET_ERROR,
        payload: err.response.data
      })
    );
};
export const deleteExperience = id => dispatch => {
  axios
    .delete(`/api/profile/experience/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERROR,
        payload: err.response.data
      })
    );
};
export const deleteEducation = id => dispatch => {
  axios
    .delete(`/api/profile/educations/${id}`)
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERROR,
        payload: err.response.data
      })
    );
};
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};
