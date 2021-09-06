import { gql } from "@apollo/client";

export const GET_DETAIL = gql`
  query ($a: Int) {
    Media(id: $a) {
      id
      type
      format
      status
      description
      trailer {
        id
      }
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
      synonyms
      rankings {
        id
      }
      recommendations(page: 1, perPage: 10, sort: RATING_DESC) {
        edges {
          node {
            id
            rating
            media {
              id
              title {
                romaji
                english
                native
                userPreferred
              }
            }
          }
        }
      }
      siteUrl
      title {
        romaji
        english
        native
        userPreferred
      }
    }
  }
`;
