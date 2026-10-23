import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {

  let routes = createBrowserRouter([
    {path: "", element: <Layout/>, children: [
      {path: "/", element: <Home/>},
      {path: "/about", element: <About/>},
      {path: "/projects", element: <Projects/>},
      {path: "/contact", element: <Contact/>},
      {path: "*", element: <NotFound/>},
    ]}
  ])
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  );
}

export default App;
