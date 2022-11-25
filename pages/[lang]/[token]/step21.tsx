import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step21 from '../../../components/Step21'

const Step21Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step21 exam={exam} />
        </Layout>
    )
}

Step21Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 21, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}


export default withLocale(Step21Page)