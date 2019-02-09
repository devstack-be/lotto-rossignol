
import React from 'react'
import { Admin, Resource, Edit, SimpleForm, DisabledInput, TextInput, required, Create, minLength, maxLength } from 'react-admin'
import Dashboard from './Dashboard'
import authProvider from './authProvider'
import AdminPlayerList from './AdminPlayerList'
import RestApi from 'ra-data-json-server'
import UserIcon from '@material-ui/icons/Person'
import './Admin.css'

const dataProvider = RestApi('api')

const Admine = () => (
    <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource options={{ label: 'Joueurs' }} name="players" list={AdminPlayerList} edit={PlayerEdit} create={PlayerCreate} icon={UserIcon}/>
    </Admin>
)
const PlayerEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="name" validate={[required(), minLength(3), maxLength(20)]} />
            <TextInput source="numbers" validate={required()} />
        </SimpleForm>
    </Edit>
)
const PlayerCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" validate={[required(), minLength(3), maxLength(20)]} />
            <TextInput source="numbers" validate={required()} />
        </SimpleForm>
    </Create>
);
export default Admine