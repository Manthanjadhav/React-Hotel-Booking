import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/search",
    element: <Layout><p>Search Page</p></Layout>,
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