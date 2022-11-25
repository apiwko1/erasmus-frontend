import React from 'react'
import { NextPage } from 'next'
import Layout from '../../../components/Layout'
import withLocale from '../../../hocs/withLocale'
import { getExamData } from '../../../services/exam'
import Done from '../../../components/Done'

const DonePage: NextPage = ({exam}) => {
    return (
        <Layout titleKey="dashboard" isNavigation={false}>
            <Done exam={exam}/>
        </Layout>
    )
}

DonePage.getInitialProps = async ctx => {
    try {
        const exam = await getExamData(ctx?.query?.token, 30, ctx);
        return { exam };
    } catch (error) {
        console.log(error);
        return {}
    };
}


export default withLocale(DonePage)
