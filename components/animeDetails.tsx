import useFetchAnimeInfo from "../hooks/useFetchAnimeInfo";
import ReadMoreSynopsis from "./readMoreSynopsis";

export default function AnimeDetails(props: {
  malid: number;
  readMoreSynopsis: boolean;
}) {
  const { malid, readMoreSynopsis} = props;
  const animeRes = useFetchAnimeInfo(malid);

  return (
    <>
      <p>
        {animeRes && animeRes.data.mal_id != -1 ? animeRes.data.mal_id : ""}
      </p>
      <p>
        {animeRes ? animeRes.data.title_japanese : "Japanese title comes here"}
      </p>
      <div>
        {animeRes ? (
          <>
            <ReadMoreSynopsis
              paragraph={animeRes.data.synopsis}
              readMore={readMoreSynopsis}
            />
          </>
        ) : (
          "synopsis comes here"
        )}
      </div>
    </>
  );
}
