import axios from 'axios';

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:1337/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${API_KEY}`,
  }
});

const createResume = (data) => {
  return axiosClient.post('/user-resumes', data);
};

const getUserResumes = (userEmail) => {
  return axiosClient.get(`/user-resumes?filters[userEmail][$eq]=${userEmail}`);
};

const getResumeById = (resumeId) => {
  return axiosClient.get(`/user-resumes?filters[resumeid][$eq]=${resumeId}`);
};

const updateResume = (id, data) => {
  return axiosClient.put(`/user-resumes/${id}`, data);
};

const deleteResume = (id) => {
  return axiosClient.delete(`/user-resumes/${id}`);
};

export default {
  createResume,
  getUserResumes,
  getResumeById,
  updateResume,
  deleteResume
};
