import React from 'react'
import { Edit, SimpleForm, DisabledInput, TextInput, required, minLength, maxLength } from 'react-admin'
import { validateNumbers } from '../Validation/Validation'

const EditTitle = ({ record }) => {
    return <span>Editer le joueur: {record ? `${record.name}` : ''}</span>
}

const PlayerEdit = (props) => (
    <Edit title={<EditTitle/>} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput source="name" label="Nom" validate={[required(), minLength(3), maxLength(20)]} />
            <TextInput style={{ width: "100%"}} source="numbers" label="Numéros (Séparés par des virgules)" validate={[required(), validateNumbers]} />
        </SimpleForm>
    </Edit>
)

export default PlayerEdit