import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/header/Header";
import "./App.css";
import Main from "./components/main/Main";
import Profile from "./components/main/Profile";
import Contact from "./components/main/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Main />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="Contact" element={<Contact />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
