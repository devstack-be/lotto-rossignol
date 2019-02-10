
import React from 'react'
import { Admin as ReactAdmin, Resource } from 'react-admin'
import RestApi from 'ra-data-json-server'
import UserIcon from '@material-ui/icons/Person'
import DrawingIcon from '@material-ui/icons/ConfirmationNumber'
import frenchMessages from 'ra-language-french'
import createHistory from 'history/createMemoryHistory'

import Dashboard from './Dashboard'
import authProvider from './authProvider'
import PlayerList from './Players/List'
import PlayerEdit from './Players/Edit'
import PlayerCreate from './Players/Create'

import DrawingList from './Drawings/List'
import DrawingEdit from './Drawings/Edit'
import DrawingCreate from './Drawings/Create'

import './Admin.css'

const history = createHistory()

const messages = {
    fr: frenchMessages
}
const i18nProvider = locale => messages[locale]

const dataProvider = RestApi('/api')

const Admin = () => (
    <ReactAdmin history={history} locale="fr" i18nProvider={i18nProvider} authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource options={{ label: 'Joueurs' }} name="players" list={PlayerList} edit={PlayerEdit} create={PlayerCreate} icon={UserIcon}/>
        <Resource options={{ label: 'Tirages' }} name="drawings" list={DrawingList} edit={DrawingEdit} create={DrawingCreate} icon={DrawingIcon}/>
    </ReactAdmin>
)

export default Admin