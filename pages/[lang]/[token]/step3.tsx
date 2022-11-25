import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step3 from '../../../components/Step3'

const Step3Page: NextPage = ({ exam }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step3 exam={exam} />
        </Layout>
    )
}

Step3Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 3, ctx);
        return { exam };
    } catch (error) {
        return {}
    }

}


export default withLocale(Step3Page)
