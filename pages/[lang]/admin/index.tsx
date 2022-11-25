import React, { useState } from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import LoginPage from '../../../components/LoginPage'
import RegisterPage from '../../../components/RegisterPage'
import withLocale from '../../../hocs/withLocale'
import { isLogged } from '../../../services/auth'
import Router from 'next/router'

const IndexPage: NextPage = () => {

const [isLoginPage, setIsLoginPage] = useState(true);

  return (
    <Layout titleKey="Homepage" isNavigation={true}>
      {isLoginPage ? <LoginPage setIsLoginPage={setIsLoginPage} /> : <RegisterPage setIsLoginPage={setIsLoginPage} />}
    </Layout>
  )
}

IndexPage.getInitialProps = ({req, res}) => {
  const isRedirect = isLogged(req, res);

  if(res && isRedirect) {
    res.writeHead(301, {
      Location: `admin/dashboard`
    });
    res.end();
  }

  if(!res && isRedirect) {
    Router.push(`admin/dashboard`);
  }

  return {};
}


export default withLocale(IndexPage)
