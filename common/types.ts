export interface basicAnimeInfo {
    image: string;
    title: string;
    malid: number;
}

export interface topBasicAnimeInfo extends basicAnimeInfo {
    rank: number;
}

export interface jikanTop {
    type: string,
    page: number,
    subtype: string,
}

export interface indexableArray {
    [index: number]: JSX.Element;
    length: number;
}

export interface basicGenre {
    mal_id: number;
    type: string;
    name: string;
}

export interface detailAnimeInfo extends basicAnimeInfo {
    title_japanese: string;
    trailer_url: string;
    synopsis: string;
    genres: basicGenre[];
}