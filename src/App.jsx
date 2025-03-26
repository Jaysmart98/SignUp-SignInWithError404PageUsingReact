import { Route, Routes } from "react-router-dom";
import Signup from "./pages/SIgnUp";
import Fetch from "./pages/Fetch";
import Signin from "./pages/Signin";
import Error404 from "./pages/Error404";
import { Parent } from "./pages/Parent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/api" element={<Fetch/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="*" element={<Error404/>} />
        <Route path="/parent" element={<Parent/>} />
      </Routes>
      </>
  );
}

export default App
