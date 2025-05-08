// App.jsx
import "./app.css";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Register from "./screens/Register";
import Register2 from "./screens/Register2";
import UserList from "./screens/UserList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { CountProvider } from "./context/CountContext"; // ✅ added this

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
  {
    path: "/contact",
    element: <Contact />, // ✅ Contact page through router
  },
]);

export function App() {
  return (
    <>
      <div>
        <Provider store={store}>
          <CountProvider>
            {" "}
            {/* ✅ Context provider added here */}
            <h1>Hello World</h1>
            {/* <Contact /> ✅ Removed direct render */}
            <RouterProvider router={Router} />
          </CountProvider>
        </Provider>
      </div>
    </>
  );
}

export default App;
