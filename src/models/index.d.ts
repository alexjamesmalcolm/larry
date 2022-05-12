import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum ImageType {
  GRAPHIC_DESIGN = "GRAPHIC_DESIGN",
  ILLUSTRATION = "ILLUSTRATION"
}



type ImageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Image {
  readonly id: string;
  readonly blob: string;
  readonly type: ImageType | keyof typeof ImageType;
  readonly description: string;
  readonly order: number;
  readonly isDeleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Image, ImageMetaData>);
  static copyOf(source: Image, mutator: (draft: MutableModel<Image, ImageMetaData>) => MutableModel<Image, ImageMetaData> | void): Image;
}