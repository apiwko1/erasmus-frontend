import React from 'react'
import { useRouter } from 'next/router'
import { locales, languageNames } from '../translations/config'
import { LocaleContext } from '../context/LocaleContext'
import IconButton from '@material-ui/core/IconButton';

const LocaleSwitcher: React.FC = () => {
  const router = useRouter()
  const { locale } = React.useContext(LocaleContext)

  const handleLocaleChange = (lang: string) => {
    const regex = new RegExp(`^/(${locales.join('|')})`)
    router.push(router.pathname, router.asPath.replace(regex, `/${lang}`))
  }

  return (
    <>
      <div className="flagText">Change your langauge</div>
      <div className="flagContainer">
        <div onClick={() => handleLocaleChange('it')}>
          <img src="https://prolearn-project.eu/wp-content/plugins/sitepress-multilingual-cms/res/flags/it.png" height="20" />
        </div>
        <div onClick={() => handleLocaleChange('en')}>
          <img src="https://prolearn-project.eu/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png" height="20" />
        </div>
        <div onClick={() => handleLocaleChange('pl')}>
          <img src="https://prolearn-project.eu/wp-content/plugins/sitepress-multilingual-cms/res/flags/pl.png" height="20" />
        </div>
        <div onClick={() => handleLocaleChange('ro')}>
          <img src="https://prolearn-project.eu/wp-content/plugins/sitepress-multilingual-cms/res/flags/ro.png" height="20" />
        </div>
        <div onClick={() => handleLocaleChange('gr')}>
          <img src="https://prolearn-project.eu/wp-content/plugins/sitepress-multilingual-cms/res/flags/gr.png" height="20" />
        </div>
        <div onClick={() => handleLocaleChange('cy')}>
          <img src="https://prolearn-project.eu/wp-content/plugins/sitepress-multilingual-cms/res/flags/cy.png" height="20" />
        </div>

      </div>
      <style jsx>
        {`
          .flagText {
            display: flex;
            text-align: center;
            justify-content: center;
            margin-bottom: 10px;
          }
          .flagContainer {
            display: flex;
            flex-flow: row;
          }
          div + div {
            margin-left: 10px;
          }
          div {
            cursor: pointer;
          }
        `}
      </style>
    </>
  )
}

export default LocaleSwitcher
