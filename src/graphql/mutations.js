/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAudio = /* GraphQL */ `
  mutation CreateAudio(
    $input: CreateAudioInput!
    $condition: ModelAudioConditionInput
  ) {
    createAudio(input: $input, condition: $condition) {
      id
      title
      description
      filePath
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateAudio = /* GraphQL */ `
  mutation UpdateAudio(
    $input: UpdateAudioInput!
    $condition: ModelAudioConditionInput
  ) {
    updateAudio(input: $input, condition: $condition) {
      id
      title
      description
      filePath
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteAudio = /* GraphQL */ `
  mutation DeleteAudio(
    $input: DeleteAudioInput!
    $condition: ModelAudioConditionInput
  ) {
    deleteAudio(input: $input, condition: $condition) {
      id
      title
      description
      filePath
      owner
      createdAt
      updatedAt
    }
  }
`;
