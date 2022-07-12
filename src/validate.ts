import Ajv from 'ajv';
import { generateSchema } from './index';

const ajv = new Ajv({
  strict: true,
  strictRequired: true,
  strictTypes: true,
  coerceTypes: false,
  allErrors: true,
  verbose: true,
  messages: true
});

export const validateInput = (schema: any, event: any) => {
  const validate = ajv.compile(schema);
  const valid = validate(event);

  if (!valid) {
    console.error('ERRORS:', JSON.stringify(validate.errors));
  }

  return valid;
}

const person = {
  name: 'Domen',
  surname: 'Gabrovsek',
  age: 28,
  eyecolor: 'brown'
};

const schema = generateSchema('Person');
const result = validateInput(JSON.parse(schema), person);

console.log(`Input is ${result ? 'valid' : 'invalid'} according to schema.`);