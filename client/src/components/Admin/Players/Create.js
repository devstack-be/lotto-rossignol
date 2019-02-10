import React from 'react'
import { SimpleForm, TextInput, required, Create, minLength, maxLength } from 'react-admin'
import {validateNumbers} from '../Validation/Validation'

const PlayerCreate = (props) => (
    <Create title="Ajouter un joueur" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nom" validate={[required(), minLength(3), maxLength(20)]} />
            <TextInput style={{ width: "100%"}} source="numbers" label="Numéros (Séparés par des virgules)" validate={[required(), validateNumbers]} />
        </SimpleForm>
    </Create>
)

export default PlayerCreate