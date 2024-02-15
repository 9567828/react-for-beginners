import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("hi :)");
    return () => console.log("bye :(");
  });
  return <h1>Hello</h1>;
}

function ShowHide() {
  const [showing, setShowing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
  };
  const onChange = (event) => {
    setEdit(event.target.value);
  };
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={edit} />
        <input type="submit" value={loading ? "loading.." : "false"} />
      </form>
    </div>
  );
}

export default ShowHide;
