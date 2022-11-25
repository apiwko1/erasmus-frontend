import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step24 from '../../../components/Step24'

const Step24Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step24 exam={exam} />
        </Layout>
    )
}

Step24Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 24, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}

export default withLocale(Step24Page)