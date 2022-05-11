// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ImageType = {
  "GRAPHIC_DESIGN": "GRAPHIC_DESIGN",
  "ILLUSTRATION": "ILLUSTRATION"
};

const { Image } = initSchema(schema);

export {
  Image,
  ImageType
};