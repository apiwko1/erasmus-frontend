import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import MetricForm from '../../../components/MetricForm'

const Step1Page: NextPage = ({exam}) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <MetricForm exam={exam}/>
        </Layout>
    )
}

Step1Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 1, ctx);
        return { exam };
    } catch (error) {
        return {}
    }
}


export default withLocale(Step1Page)
