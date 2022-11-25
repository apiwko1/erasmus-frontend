import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Step6 from '../../../components/Step6'

const Step6Page: NextPage = ({exam}) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Step6 exam={exam}/>
        </Layout>
    )
}

Step6Page.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 6, ctx);
        return { exam };
    } catch (error) {
        return {}
    }
}


export default withLocale(Step6Page)
