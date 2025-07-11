import { Route, Routes } from "react-router-dom";

import ThemeSignInPage from "./pages/ThemeSignInPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/login" element={<ThemeSignInPage />} />
      </Routes>
    </>
  );
}

export default App;
