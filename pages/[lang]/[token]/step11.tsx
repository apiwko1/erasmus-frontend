import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step11 from '../../../components/Step11'

const Step11Page: NextPage = ({exam}) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step11 exam={exam}/>
        </Layout>
    )
}

Step11Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 11, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}


export default withLocale(Step11Page)
