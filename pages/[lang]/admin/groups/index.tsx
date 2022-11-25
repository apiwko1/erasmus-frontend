import React from 'react'
import Router from 'next/router'
import { NextPage } from 'next'
import Layout from '../../../../components/Layout'
import withLocale from '../../../../hocs/withLocale'
import { Button } from '@material-ui/core'
import { logout } from '../../../../services/user'
import { auth } from '../../../../services/auth'
import { getAllGroup } from '../../../../services/group'
import Groups from '../../../../components/Groups'

const GroupsPage: NextPage = ({ allGroups }) => {
    return (
        <Layout titleKey="dashboard" isNavigation={true}>
            <Groups data={allGroups} />
        </Layout>
    )
}

GroupsPage.getInitialProps = async ctx => {
    const lang = ctx.query.lang as string;
    auth(ctx.req, ctx.res, lang);
    const allGroups = await getAllGroup(ctx.req, ctx.res);
    return { allGroups };
}


export default withLocale(GroupsPage)
