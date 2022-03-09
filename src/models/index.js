// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Audio } = initSchema(schema);

export {
  Audio
};