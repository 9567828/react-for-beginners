import { useState } from "react";
import ShowHide from "./show_hide";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]); // 빈 array로 받는다.
  const [editTodo, setEditTodo] = useState("");
  const [editOpen, setEditOpen] = useState(false);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("toDo:", toDo);
    if (toDo === "") {
      return; // input값이 비어 있으면 return > 함수를 실행하지 않도록 한다.
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo(""); // input을 비워주고 싶다.
  };
  const onDelet = (event) => {
    const getItem = parseInt(event.target.id);
    return setToDos(toDos.filter((item, todoIndex) => getItem !== todoIndex));
  };

  const onEditSubmit = (event) => {
    event.preventDefault();
    console.log("edit :", toDo);
    if (editTodo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setEditTodo("");
  };
  const onEditChange = (e) => setEditTodo(e.target.value);
  const onEdit = (e) => {
    setEditOpen((prev) => !prev);
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your Todo ..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <form onSubmit={onEditSubmit}>
              <input onChange={onEditChange} type="text" value={editTodo} />
              <input type="submit" />
            </form>
            <button id={index}>✍</button>
            <button id={index} onClick={onDelet}>
              ❌
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <ShowHide />
    </div>
  );
}

export default App;
