import React from 'react'
import { NextPage } from 'next'
import Group from '../../../../../components/Group'
import Layout from '../../../../../components/Layout'
import withLocale from '../../../../../hocs/withLocale'
import { auth } from '../../../../../services/auth'
import { getGroup } from '../../../../../services/group'

const GroupPage: NextPage = ({ allExams }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={true}>
            <Group data={allExams} />
        </Layout>
    )
}

GroupPage.getInitialProps = async ctx => {
    const lang = ctx.query.lang as string;
    const id = ctx.query.id as string;
    auth(ctx.req, ctx.res, lang);
    const allExams = await getGroup(id, ctx.req, ctx.res);
    return { allExams };
}


export default withLocale(GroupPage)
