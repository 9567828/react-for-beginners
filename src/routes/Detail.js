import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movieinfo from "../components/Movieinfo";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
      setLoading(false);
    };
    getMovie();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>loading..</h1>
      ) : (
        <div>
          <Movieinfo
            coverImg={movie.medium_cover_image}
            title={movie.title}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
