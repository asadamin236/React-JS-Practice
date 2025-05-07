import "./app.css";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Register from "./screens/Register";
import Register2 from "./screens/Register2";
import UserList from "./screens/UserList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store/Reducer";
import { store } from "./store/store";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Hello World2</h2>,
  },
  {
    path: "/home",
    element: <h2>Home</h2>,
  },
  {
    path: "/register2",
    element: <Register2 />,
  },
  {
    path: "/user-list",
    element: <UserList />,
  },
]);

export function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <h1>Hello World</h1>
          {/* <Register /> */}
          {/* <Contact /> */}
          {/* <UserList /> */}
          {/* <RouterProvider router={Register2} /> */}
          <RouterProvider router={Router} />
          <Contact />
          {/* <Register2 /> */}
        </Provider>
      </div>
    </>
  );
}

export default App;
