// eslint-disable-next-line no-unused-vars
import AddUser from "./components/AddUser";
import Allusers from "./components/Allusers";
import Codeforinterview from "./components/Codeforinterview";
import Navbar from "./components/NAvBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Codeforinterview />} />
      </Routes>
      <Routes>
        <Route path="/all" element={<Allusers />} />
      </Routes>
      <Routes>
        <Route path="/add" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
