/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAudio = /* GraphQL */ `
  query GetAudio($id: ID!) {
    getAudio(id: $id) {
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
export const listAudio = /* GraphQL */ `
  query ListAudio(
    $filter: ModelAudioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAudio(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        filePath
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
