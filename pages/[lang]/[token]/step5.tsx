import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step5 from '../../../components/Step5'

const Step5Page: NextPage = ({exam}) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step5 exam={exam}/>
        </Layout>
    )
}

Step5Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 5, ctx);
        return { exam };
    } catch (error) {
        return {}
    }
}


export default withLocale(Step5Page)
