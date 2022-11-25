import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step20 from '../../../components/Step20'

const Step20Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step20 exam={exam} />
        </Layout>
    )
}

Step20Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 20, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}


export default withLocale(Step20Page)