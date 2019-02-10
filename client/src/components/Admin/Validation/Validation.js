import { regex } from 'react-admin'

export const validateNumbers = regex(/^\d{1,2}([,]\d{1,2})*$/, 'Format non valide (Chiffres séparés par une virgule)')