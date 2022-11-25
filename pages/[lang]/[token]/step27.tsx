import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step27 from '../../../components/Step27'

const Step27Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step27 exam={exam} />
        </Layout>
    )
}

Step27Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 27, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}

export default withLocale(Step27Page)