import React from 'react'
import { SimpleForm, TextInput, required, Create, DateInput } from 'react-admin'
import {validateNumbers} from '../Validation/Validation'

const DrawingCreate = (props) => (
    <Create title="Ajouter un tirage" {...props}>
        <SimpleForm>
            <TextInput style={{ width: "100%"}} source="numbers" label="Numéros (Séparés par des virgules)" validate={[required(), validateNumbers]} />
            <DateInput source="date" label="Date" validate={required()} />
        </SimpleForm>
    </Create>
)

export default DrawingCreate