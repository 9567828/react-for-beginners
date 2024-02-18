import { useNavigate } from "react-router-dom";

function Movieinfo({ coverImg, title, summary, genres }) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      {/* 장르 안에는 id등 고유값이 없기 때문에 예외적으로 g를 똑같이 넣어줄 수 있다. */}
      <ul>
        {genres.map((g, i) => (
          <li key={i}>{g}</li>
        ))}
      </ul>
      <button onClick={goBack}>뒤로가기</button>
    </div>
  );
}

export default Movieinfo;
