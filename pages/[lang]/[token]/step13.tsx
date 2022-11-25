import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step13 from '../../../components/Step13'

const Step13Page: NextPage = ({exam}) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step13 exam={exam}/>
        </Layout>
    )
}

Step13Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 13, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}


export default withLocale(Step13Page)
