import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step26 from '../../../components/Step26'

const Step26Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step26 exam={exam} />
        </Layout>
    )
}

Step26Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 26, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}

export default withLocale(Step26Page)