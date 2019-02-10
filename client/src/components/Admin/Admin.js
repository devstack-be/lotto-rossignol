
import React from 'react'
import { Admin, Resource, Edit, SimpleForm, DisabledInput, TextInput, required, Create, minLength, maxLength, regex } from 'react-admin'
import Dashboard from './Dashboard'
import authProvider from './authProvider'
import AdminPlayerList from './AdminPlayerList'
import RestApi from 'ra-data-json-server'
import UserIcon from '@material-ui/icons/Person'
import './Admin.css'
import frenchMessages from 'ra-language-french';
import createHistory from 'history/createMemoryHistory';

const history = createHistory();

const messages = {
    fr: frenchMessages
}
const i18nProvider = locale => messages[locale];

const dataProvider = RestApi('api')

const Admine = () => (
    <Admin history={history} locale="fr" i18nProvider={i18nProvider} authProvider={authProvider} dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource options={{ label: 'Joueurs' }} name="players" list={AdminPlayerList} edit={PlayerEdit} create={PlayerCreate} icon={UserIcon}/>
    </Admin>
)

const validateNumbers = regex(/^\d{1,2}([,]\d{1,2})*$/, 'Format non valide (Chiffres séparés par une virgule)');

const EditTitle = ({ record }) => {
    return <span>Editer le joueur: {record ? `${record.name}` : ''}</span>;
};
const PlayerEdit = (props) => (
    <Edit title={<EditTitle/>} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="name" label="Nom" validate={[required(), minLength(3), maxLength(20)]} />
            <TextInput style={{ width: "100%"}} source="numbers" label="Numéros (Séparés par des virgules)" validate={[required(), validateNumbers]} />
        </SimpleForm>
    </Edit>
)

const PlayerCreate = (props) => (
    <Create title="Créer un joueur" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nom" validate={[required(), minLength(3), maxLength(20)]} />
            <TextInput style={{ width: "100%"}} source="numbers" label="Numéros (Séparés par des virgules)" validate={[required(), validateNumbers]} />
        </SimpleForm>
    </Create>
);
export default Admine