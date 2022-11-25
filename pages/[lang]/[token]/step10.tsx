import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step10 from '../../../components/Step10'

const Step10Page: NextPage = ({exam}) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step10 exam={exam}/>
        </Layout>
    )
}

Step10Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 10, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}


export default withLocale(Step10Page)
