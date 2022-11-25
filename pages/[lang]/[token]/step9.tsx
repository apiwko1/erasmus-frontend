import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step9 from '../../../components/Step9'

const Step9Page: NextPage = ({exam}) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step9 exam={exam}/>
        </Layout>
    )
}

Step9Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 9, ctx);
        return { exam };
    } catch (error) {
        return {}
    }
}


export default withLocale(Step9Page)
