import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step15 from '../../../components/Step15'

const Step15Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step15 exam={exam} />
        </Layout>
    )
}

Step15Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 15, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}


export default withLocale(Step15Page)
