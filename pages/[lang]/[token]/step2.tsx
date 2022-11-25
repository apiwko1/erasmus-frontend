import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import MetricForm from '../../../components/MetricForm'
import Step2 from '../../../components/Step2'

const Step2Page: NextPage = ({exam}) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step2 exam={exam}/>
        </Layout>
    )
}

Step2Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 2, ctx);
        return { exam };
    } catch (error) {
        return {}
    }
}


export default withLocale(Step2Page)
