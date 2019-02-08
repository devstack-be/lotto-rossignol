import React from 'react'
import { List, Datagrid, TextField } from 'react-admin'

const AdminPlayerList = props => (
    <List {...props} title="Joueurs" perPage={25}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="numbers" />
        </Datagrid>
    </List>
)

export default AdminPlayerList