import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movie/:id", //  :가 아니라 /id 로 적으면 /id 페이지로 넘어가게 되있음
      element: <Detail />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
