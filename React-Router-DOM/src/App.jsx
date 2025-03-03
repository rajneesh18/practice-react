import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app-layout";
import Home from "./pages/home";
import PostList, { postLoader } from "./pages/post-list";
import PostComments, { postCommentsLoader } from "./pages/post-comments";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <PostList />,
        loader: postLoader,
      },
      {
        path: "/posts/:postId",
        element: <PostComments />,
        loader: postCommentsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
