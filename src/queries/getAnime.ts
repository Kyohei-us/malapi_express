import { gql } from "@apollo/client";
import { AnimeInfoWA } from "../../common/types";

export const GET_ANIME = gql`
  query GetAnime($q: String) {
    Page(page: 1, perPage: 10) {
      media(search: $q, type: ANIME, sort: SEARCH_MATCH) {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        bannerImage
        description
        coverImage {
          extraLarge
          large
          medium
          color
        }
        recommendations(page: 1, perPage: 10, sort: RATING_DESC) {
          edges {
            node {
              id
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
      }
    }
  }
`;

export interface MediaSearchRes extends AnimeInfoWA {}

export interface AnimeData {
  Page: {
    media: MediaSearchRes[];
  };
}

export interface MediaVars {
  q: string;
}
