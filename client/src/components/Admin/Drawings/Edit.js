import React from 'react'
import { Edit, SimpleForm, DisabledInput, TextInput, required, DateInput } from 'react-admin'
import { validateNumbers } from '../Validation/Validation'

const EditTitle = ({ record }) => {
    return <span>Editer le tirage: {record ? `${record.id}` : ''}</span>
}

const DrawingEdit = (props) => (
    <Edit title={<EditTitle/>} {...props}>
        <SimpleForm>
            <DisabledInput label="Id" source="id" />
            <TextInput style={{ width: "100%"}} source="numbers" label="Numéros (Séparés par des virgules)" validate={[required(), validateNumbers]} />
            <DateInput source="date" label="Date" validate={required()} />
        </SimpleForm>
    </Edit>
)

export default DrawingEdit