import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step7 from '../../../components/Step7'

const Step7Page: NextPage = ({exam}) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step7 exam={exam}/>
        </Layout>
    )
}

Step7Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 7, ctx);
        return { exam };
    } catch (error) {
        return {}
    }
}


export default withLocale(Step7Page)
