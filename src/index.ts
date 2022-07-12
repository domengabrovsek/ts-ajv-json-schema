import { createGenerator } from 'ts-json-schema-generator';

export const generateSchema = (type: string) => {

  const config = {
    path: `./src/types/${type}.ts`,
    tsconfig: './tsconfig.json',
    type: type,
  };

  console.log(`Generating json-schema for type "${type}"`);

  const schema = createGenerator(config).createSchema(config.type);
  const schemaString = JSON.stringify(schema, null, 2);

  console.log('Done');

  return schemaString;
};