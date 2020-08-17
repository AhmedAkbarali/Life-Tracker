import axios from 'axios';
import { FETCH_USER, FETCH_PROJECTS, FETCH_PROJECT } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProjects = () => async dispatch => {
  const res = await axios.get('/api/projects');

  dispatch({ type: FETCH_PROJECTS, payload: res.data });
};

export const submitProject = (values, history) => async dispatch => {
    const res = await axios.post('/api/projects', {title: values});
    console.log(values);
    history.push('/projects');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchProject = (projectId) => async dispatch => {
    const res = await axios.get(`/api/project/${projectId}`);

    dispatch({ type: FETCH_PROJECT, payload: res.data });
};