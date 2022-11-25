import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step12 from '../../../components/Step12'

const Step12Page: NextPage = ({exam}) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step12 exam={exam}/>
        </Layout>
    )
}

Step12Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 12, ctx);
        return { exam };
    } catch (error) {
        return {}
    };
}


export default withLocale(Step12Page)
