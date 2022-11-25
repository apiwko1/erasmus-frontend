import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step29 from '../../../components/Step29'

const Step29Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step29 exam={exam} />
        </Layout>
    )
}

Step29Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 29, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}

export default withLocale(Step29Page)