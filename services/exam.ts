import axios from 'axios';
import { ServerResponse } from 'http';
import getConfig from 'next/config'
import Router from 'next/router';
import { getToken } from './auth';

const { publicRuntimeConfig } = getConfig();
const API_URL = publicRuntimeConfig.API_URL;

interface MetricPayload {
  age: null;
  gender: null;
  residence: null;
  educationStage: null;
  kindStudent: null;
  grade: null;
  step: string;
}

interface Step2Payload {
  metricReading: number;
  metricListing: number;
  metricPlaying: number;
  metricWatching: number;
}

const generateAnonToken = () => {
  return axios.get(`${API_URL}/exam/token`)
    .then(function ({ data }) {
      return data;
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
}


const generateUserToken = (req?, res?) => {
  const token = getToken(req, res);
  const jwtHeader = { headers: { "Authorization": `Bearer ${token}` } }
  return axios.get(`${API_URL}/exam/user/token`, jwtHeader)
    .then(function ({ data }) {
      return data;
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
}

const getReportAll = (req?, res?) => {
  const token = getToken(req, res);
  const jwtHeader = {}
  return axios.get(`${API_URL}/exam/report`, { responseType: 'arraybuffer', headers: { "Authorization": `Bearer ${token}` }})
    .then(function ({ data }) {
      return data;
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
}

const getReportGroup = (groupId, req?, res?) => {
  const token = getToken(req, res);
  const jwtHeader = { headers: { "Authorization": `Bearer ${token}` } }
  return axios.get(`${API_URL}/exam/report/${groupId}`, jwtHeader)
    .then(function ({ data }) {
      return data;
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
}

const getExam = (token: string) => {
  return axios.get(`${API_URL}/exam/find/${token}`)
    .then(function ({ data }) {
      return data;
    })
    .catch(function () {
      return null;
    });
}

const updateStep = (token: string, data: any) => {
  return axios.post(`${API_URL}/exam/update/${token}`, data)
    .then(function ({ data }) {
      return data;
    })
    .catch(function () {
      return null;
    });
}

const createExamWithGroupToken = (groupToken: string, req?, res?) => {
  const token = getToken(req, res);
  console.log('token', token);
  const jwtHeader = { headers: { "Authorization": `Bearer ${token}` } }
  return axios.post(`${API_URL}/exam/user/group-token`, { groupToken }, jwtHeader)
    .then(function ({ data }) {
      return data;
    })
    .catch(function (error) {
      console.log(error);
      return null;
    });
}


const createOrGetExam = (token: string) => {
  return axios.get(`${API_URL}/exam/create/${token}`)
    .then(function ({ data }) {
      return data?.step !== 'step12' ? data.step : 'done';
    })
    .catch(function (error) {
      return null;
    });
}

const getExamData = async (token: string, step: number, ctx: any) => {
  const res = ctx?.res;
  const req = ctx?.req;

  const exam = await getExam(token);
  // console.log(res);
  const url = req?.url;

  if (!exam && res) {
    res.writeHead(301, {
      Location: '/'
    });
    res.end();
  }

  if (!exam && !res) {
    return Router.push('/');
  }

  let examStepString = exam?.step.split('step')[1];
  let examStep;

  if(examStepString === 'done') {
    examStep = 30;
  } else {
    examStep = parseInt(exam?.step.split('step')[1]);
  }

  let replaceUrl = url;

  if(step === 30 && examStep !== 30) {
    replaceUrl = url.replace(`done`, `step${examStep}`)
  }

  if (step !== 30 && step > examStep) {
    replaceUrl = url.replace(`step${step}`, `step${examStep}`)
  }



  if (res && step > examStep) {
    res.writeHead(301, {
      Location: replaceUrl
    });
    res.end();
  }

  if (!res && step > examStep) {
    return Router.push(replaceUrl);
  }

  return exam;
}

export {
  generateAnonToken,
  getExamData,
  createOrGetExam,
  updateStep,
  createExamWithGroupToken,
  generateUserToken,
  getReportAll,
  getReportGroup
}