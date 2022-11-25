import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step23 from '../../../components/Step23'

const Step23Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step23 exam={exam} />
        </Layout>
    )
}

Step23Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 23, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}


export default withLocale(Step23Page)