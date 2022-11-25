import React from 'react'
import Link from 'next/link'
import useTranslation from '../hooks/useTranslation'
import LocaleSwitcher from './LocaleSwitcher'
import { assert } from 'console'

interface Props {
  isNavigation: boolean;
}

const Navigation: React.FC<Props> = ({ isNavigation }) => {
  const { locale, t } = useTranslation()
  return (
    <div className="main">
      <ul className="root">
        <li>
            <img className="logo" src="/template/logo.png"/>
        </li>
        {isNavigation &&
          <>
            <li>
              <Link href="/[lang]" as={`/${locale}`}>
                <a>{t('homepage')}</a>
              </Link>
            </li>
            <li>
              <Link href="/[lang]/admin/dashboard" as={`/${locale}/admin/dashboard`}>
                <a>{t('admin')}</a>
              </Link>
            </li>
            <li>
              <Link href="/[lang]/admin/groups" as={`/${locale}/admin/groups`}>
                <a>{t('groups')}</a>
              </Link>
            </li>
          </>
        }
      </ul>

      <style jsx>{`
        .main {
          display: flex;
        }
        .root {
          margin: 1rem 0 1rem 0;
          padding: 0;
          display: flex;
          justify-content: center;
          list-style: none;
          width: 100%;
        }
        .logo {
          display: flex;
          height: 150px;
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
        @media only screen and (max-width: 720px) {
         
        }
      `}</style>
    </div>

  )
}

export default Navigation
