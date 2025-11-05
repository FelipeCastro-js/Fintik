import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Login } from "../index";

export function Routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
