import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step4 from '../../../components/Step4'

const Step4Page: NextPage = ({exam}) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step4 exam={exam}/>
        </Layout>
    )
}

Step4Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 4, ctx);
        return { exam };
    } catch (error) {
        return {}
    }
}


export default withLocale(Step4Page)
