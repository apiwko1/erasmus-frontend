//@ts-ignore
import Cookies from 'cookies';
//@ts-ignore
import cookie from 'cookie-cutter';
import Router from 'next/router';

//@ts-ignore
const auth = (req, res, lang) => {
    if (req && res) {
        const cookies = new Cookies(req, res)
        const token = cookies.get('token')
        if (!token && res) {
            res.writeHead(301, {
                Location: `/${lang}/admin`
            });
            res.end();
        }
    } else {
        const token = cookie.get('token')
        if (!token) {
            Router.push( `/${lang}/admin`);
        }
    }

    return true;
}

//@ts-ignore
const isLogged = (req, res) => {
    if (req && res) {
        const cookies = new Cookies(req, res)
        const token = cookies.get('token')
        if (!token && res) {
           return false;
        }
    } else {
        const token = cookie.get('token')
        if (!token) {
           return false;
        }
    }

    return true;
}

const getToken = (req, res) => {
    let token = null;
    if (req && res) {
        const cookies = new Cookies(req, res)
        token = cookies.get('token')
        if (!token && res) {
           return null;
        }
    } else {
        token = cookie.get('token')
        if (!token) {
           return null;
        }
    }

    return token;
}

export {
    auth,
    isLogged,
    getToken
}