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
        <AnimeImageCard
          title={baiList[0].title}
          image={baiList[0].image}
          malid={baiList[0].malid}
        />
      ) : (
        <div>Anime Card comes here</div>
      )}
    </div>
  );
}
