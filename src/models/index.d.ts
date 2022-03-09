import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type AudioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Audio {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly filePath: string;
  readonly owner: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Audio, AudioMetaData>);
  static copyOf(source: Audio, mutator: (draft: MutableModel<Audio, AudioMetaData>) => MutableModel<Audio, AudioMetaData> | void): Audio;
}