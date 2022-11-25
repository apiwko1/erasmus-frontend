import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Layout from '../../components/Layout'
import StartStudy from '../../components/StartStudy'
import { LocaleContext } from '../../context/LocaleContext'
import withLocale from '../../hocs/withLocale'
import { locales } from '../../translations/config'

const IndexPage: React.FC = () => {
  const router = useRouter()
  const { locale } = React.useContext(LocaleContext)
  const [isChoooseLangauge, setIsChooseLanguage] = useState(false);
  const handleLocaleChange = (lang: string) => {
    const regex = new RegExp(`^/(${locales.join('|')})`)
    router.push(router.pathname, router.asPath.replace(regex, `/${lang}`))
  }
  const handleChooseLanguage = (lang: string) => {
    {
      setIsChooseLanguage(true)
      handleLocaleChange(lang);
    }
  }


  return (
    <Layout titleKey="Homepage" isNavigation={false}>
      {isChoooseLangauge ?
        <StartStudy />
        :
        <div className="langauges">
           <div className="title">
            <h1>PRO-LEARN Teens</h1>
          </div>
          <div className="title">
          The online tool for diagnosis of learning styles and cognitive processes for children aged 11-14
          </div>
          <div className="subtitle">
            Select your language by clicking on the language flag below:
          </div>
          <div className="flags">
            <div className="flag" onClick={() => handleChooseLanguage('en')}>
              <img src="/flags/en.png" height="100" />
              <div className="countryName">ENGLISH</div>
            </div>
            <div className="flag" onClick={() => handleChooseLanguage('pl')}>
              <img src="/flags/pl.png" height="100" />
              <div className="countryName">POLISH</div>
            </div>
            <div className="flag" onClick={() => handleChooseLanguage('it')}>
              <img src="/flags/it.png" height="100" />
              <div className="countryName">ITALIAN</div>
            </div>
            <div className="flag" onClick={() => handleChooseLanguage('gr')}>
              <img src="/flags/gr.png" height="100" />
              <div className="countryName">GREEK</div>
            </div>
            <div className="flag" onClick={() => handleChooseLanguage('ro')}>
              <img src="/flags/ro.png" height="100" />
              <div className="countryName">ROMANIAN</div>
            </div>
            <div className="flag" onClick={() => handleChooseLanguage('cy')}>
              <img src="/flags/cy.png" height="100" />
              <div className="countryName">CYPRIOT</div>
            </div>
          </div>
          <div className="footerText">
            *	This project has been funded with support from the European Commission under the Erasmus+ Programme. This publication [communication] reflects the views only of the author, and the Commission cannot be held responsible for any use which may be made of the information contained therein.
          </div>
          <div className="footerText">
            *	Any information provided in the PRO-LEARN Teens tool is recorded anonymously and will be used solely by the PRO-LEARN project working team. We will not sell, trade, or transfer an individual’s personal information to any third party or entity. The PRO-LEARN partnership respects the privacy rights of the tool users in accordance with the General Personal Data Protection Regulation 2016/679/ EU and the current national and European legal and regulatory framework for the protection of personal data.
          </div>
        </div>
      }
      <style jsx>
        {`

          .title {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: bold;
            padding: 15px 10% 15px 10%;
            text-align: center;
            margin-bottom: 30px;
        }
        .footerText {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          font-size: 14px;
          padding: 15px 10% 15px 10%;
          text-align: left;
          margin-bottom: 10px;
      }
        .subtitle {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            text-align: center;
        }
          .flags {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px 0;
          }
          .flag {
            cursor: pointer;
            height: 120px;
          }

          .countryName{
            text-align:center;
            display: none;
          }

          .flag:hover .countryName{
            display: block;
          }

          @media only screen and (max-width: 1100px) {
            .flags {
              flex-flow: column wrap;
            }
            .flag{
              margin-top: 25px;
            }
          }
        `}
      </style>
    </Layout>
  )
}

export default withLocale(IndexPage)
