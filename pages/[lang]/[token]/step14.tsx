import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step14 from '../../../components/Step14'

const Step14Page: NextPage = ({exam}) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step14 exam={exam}/>
        </Layout>
    )
}

Step14Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 14, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}


export default withLocale(Step14Page)
