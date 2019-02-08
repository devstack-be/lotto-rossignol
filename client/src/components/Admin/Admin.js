
import React from 'react'
import { Admin, Resource } from 'react-admin'
import Dashboard from './Dashboard'
import authProvider from './authProvider'
import AdminPlayerList from './AdminPlayerList'
import RestApi from 'ra-data-json-server'

const dataProvider = RestApi('api')

const Admine = () => (
    <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource name="players" list={AdminPlayerList} />
    </Admin>
)
export default Admine