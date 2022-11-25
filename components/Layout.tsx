import React from 'react'
import Head from 'next/head'
import useTranslation from '../hooks/useTranslation'
import Navigation from './Navigation'
import { useRouter } from 'next/router'

interface Props {
  isNavigation?: boolean;
  titleKey: string
}

const Layout: React.FC<Props> = ({ isNavigation = true, titleKey, children }) => {
  const { t } = useTranslation()
  const router = useRouter();
  const token = router?.query?.token || null;
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
      <div className="header">
        <div className="headerContent">
          <div>
            <img className="headerContentErasmusPlus" src="/img/erasmus_plus.jpeg" />
          </div>
          <div>
            <span>PRO-LEARN Teens </span>
          </div>
        </div>
      </div>

      <Head>
        <title>{t(titleKey)}</title>
      </Head>
      <Navigation isNavigation={isNavigation} />

      {token &&
        <div className="token">{t('your_token')}:&nbsp;<b>{token}</b></div>
      }

      <div className="content">{children}</div>
      <div className="content">
        <ul className="root">
          <li>
            <img src="/img/logo8.png" height="60" />
          </li>
          <li>
            <img src="/img/logo3.jpg" height="80" />
          </li>
          <li>
            <img src="/img/logo1.png" height="80" />
          </li>
          <li>
            <img src="/img/logo5.png" height="80" />
          </li>
          <li>
            <img src="/img/logo4.jpg" height="80" />
          </li>
          <li>
            <img src="/img/logo2.png" height="80" />
          </li>
        </ul>
      </div>
      <span className="footer">
        <span>2019-1-PL01-KA201-065726</span>
      </span>
      <style jsx global>{`
        body {
          font-family: 'Open Sans', sans-serif;
          margin: 0;
          min-height: 100vh;
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url('/template/stripe_up_web.png');
          background-repeat: repeat-x;
          height: 120px;
        }
        .headerContent {
          display: flex;
          margin-top: -40px;
        }
        .headerContentErasmusPlus {
          height: 35px;
        }
        .headerContent span {
          color: white;
          font-weight: 700;
          margin-left: 10px;
          margin-bottom: 50px;
        }
        .footer {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 100px;
          background-image: url('/template/stripe_up_web.png');
          background-repeat: repeat-x;
          height: 120px;
          transform: rotate(180deg);
        }
        .footer span {
          margin-top: -60px;
          font-size: 16px;
          font-weight: 700;
          color: white;
          transform: rotate(180deg);
        }
        .content {
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .token {
          display: flex;
          width: 100%;
          justify-content: center;
        }
        .root {
          margin: 80px 0 1rem 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
          flex-flow: row wrap;
        }
        .root > li:not(:last-child) {
          margin-right: 1rem;
        }
        a:link,
        a:visited {
          text-decoration: none;
          color: navy;
          text-transform: uppercase;
        }
        a:hover {
          text-decoration: underline;
        }
        li {
          margin: 10px;
        }

        @media only screen and (max-width: 1360px) {
          .footer {
            background-image: url('/template/stripe_up_tablet.png');
          }
          .header {
            background-image: url('/template/stripe_up_tablet.png');
          }
          .header span {
            margin-bottom: 70px;
          }
          .headerContent {
            margin-top: -60px;
          }
        }

        @media only screen and (max-width: 720px) {
          .footer {
            background-image: url('/template/stripe_up_phone.png');
          }
          .header {
            background-image: url('/template/stripe_up_phone.png');
          }
          .header span {
            margin-bottom: 80px;
          }
          .headerContent {
            margin-top: -70px;
          }
          .headerContentErasmusPlus {
            height: 25px;
          }
        }
      `}
      </style>
    </>
  )
}

export default Layout
