import { useEffect } from "react";
import {
  Routes,
  Route,

} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Upload from "./pages/Upload";


function App() {


  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/upload" element={<Upload />} />   

    </Routes>
  );
}
export default App;
