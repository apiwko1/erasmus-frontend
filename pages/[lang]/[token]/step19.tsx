import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step19 from '../../../components/Step19'

const Step19Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step19 exam={exam} />
        </Layout>
    )
}

Step19Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 19, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}


export default withLocale(Step19Page)
