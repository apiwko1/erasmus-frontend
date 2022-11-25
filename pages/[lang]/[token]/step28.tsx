import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step28 from '../../../components/Step28'

const Step28Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step28 exam={exam} />
        </Layout>
    )
}

Step28Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 28, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}

export default withLocale(Step28Page)