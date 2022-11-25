import axios from 'axios';
//@ts-ignore
import cookie from 'cookie-cutter';
import getConfig from 'next/config';
import Cookies from 'js-cookie';

interface loginData {
    email: string;
    password: string;
}

const { publicRuntimeConfig } = getConfig();
const API_URL = publicRuntimeConfig.API_URL;

const login = async (data: loginData) =>  {
    return axios.post(`${API_URL}/auth/sign-in`, {
        email: data.email, password: data.password
      })
      .then(function ({data}) {
        const accessToken = data?.access_token;
        if(accessToken) {
            cookie.set('token', accessToken);
        }
        return true;
      })
      .catch(function (error) {
        return false;
      });
}

const register = async (data: loginData) =>  {
    return axios.post(`${API_URL}/auth/sign-up`, {
        email: data.email, password: data.password
      })
      .then(function ({data}) {
        const accessToken = data?.access_token;
        if(accessToken) {
            cookie.set('token', accessToken);
        }
        return true;
      })
      //@ts-ignore
      .catch(function (error) {
        return false
      });
}

const logout = async () =>  {
   Cookies.remove('token');
}


export {
    login,
    register,
    logout
}