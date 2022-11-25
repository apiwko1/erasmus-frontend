import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step17 from '../../../components/Step17'

const Step17Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step17 exam={exam} />
        </Layout>
    )
}

Step17Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 17, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}


export default withLocale(Step17Page)
