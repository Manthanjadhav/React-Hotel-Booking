import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Register from "./pages/Register";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/search",
    element: <Layout><p>Search Page</p></Layout>,
  },
  {
    path: "/signin",
    element: <Layout><Register/></Layout>,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;