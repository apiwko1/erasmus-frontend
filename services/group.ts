import axios from 'axios';
import getConfig from 'next/config'
import { getToken } from './auth';

const { publicRuntimeConfig } = getConfig();
const API_URL = publicRuntimeConfig.API_URL;

const getAllGroup = (req, res) => {
    const token = getToken(req, res);
    const jwtHeader = { headers: { "Authorization": `Bearer ${token}` } }
    return axios.get(`${API_URL}/group/get/all`, jwtHeader)
        .then(function ({ data }) {
            return data;
        })
        .catch(function (error) {
            return null;
        });
}

const addGroup = (name, req?, res?) => {
    const token = getToken(req, res);
    const jwtHeader = { headers: { "Authorization": `Bearer ${token}` } }
    return axios.post(`${API_URL}/group/create`, {name}, jwtHeader)
        .then(function ({ data }) {
            return data;
        })
        .catch(function (error) {
            return null;
        });
}

const getGroup = (groupId, req, res) => {
    const token = getToken(req, res);
    const jwtHeader = { headers: { "Authorization": `Bearer ${token}` } }
    return axios.get(`${API_URL}/group/get/${groupId}`, jwtHeader)
        .then(function ({ data }) {
            return data;
        })
        .catch(function (error) {
            return null;
        });
}

export {
    getAllGroup,
    addGroup,
    getGroup
}

