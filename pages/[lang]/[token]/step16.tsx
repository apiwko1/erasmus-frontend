import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step16 from '../../../components/Step16'

const Step16Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step16 exam={exam} />
        </Layout>
    )
}

Step16Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 16, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}


export default withLocale(Step16Page)
