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