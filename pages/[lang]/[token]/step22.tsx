import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step22 from '../../../components/Step22'

const Step22Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step22 exam={exam} />
        </Layout>
    )
}

Step22Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 22, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}


export default withLocale(Step22Page)