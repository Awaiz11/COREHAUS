import { HashRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
