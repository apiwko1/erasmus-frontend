import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step25 from '../../../components/Step25'

const Step25Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step25 exam={exam} />
        </Layout>
    )
}

Step25Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 25, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}

export default withLocale(Step25Page)