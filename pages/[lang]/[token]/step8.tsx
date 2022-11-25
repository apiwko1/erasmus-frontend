import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step8 from '../../../components/Step8'

const Step8Page: NextPage = ({exam}) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step8 exam={exam}/>
        </Layout>
    )
}

Step8Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 8, ctx);
        return { exam };
    } catch (error) {
        return {}
    }
}


export default withLocale(Step8Page)
