import { basicAnimeInfo } from "../common/types";
import useFetchGenre from "../hooks/useFetchGenre";
import AnimeImageCard from "./animeImageCard/animeImageCard";

export default function GenreList(props: { genre_id: number }) {
  const { genre_id } = props;

  const genreRes = useFetchGenre("anime", genre_id, 1);

  const genreAnimeList: any[] = genreRes?.data.anime;

  const baiList: basicAnimeInfo[] = genreAnimeList?.map((ele) => {
    const baiEle: basicAnimeInfo = {
      title: ele.title,
      image: ele.image_url,
      malid: ele.mal_id,
    };
    return baiEle;
  });

  return (
    <div>
      {baiList ? (
        <AnimeImageCard bai={baiList[0]} />
      ) : (
        <div>Anime Card comes here</div>
      )}
    </div>
  );
}
