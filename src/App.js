import "./App.css";
import FormPage from "./views/Form/FormPage/FormPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormSubmitPage from "./views/Form/FormSubmitPage/FormSubmitPage";
import Login from "./views/Admin/Login/Login";
function App() {
  return (
    <div className="App">
      <header className="App-header">
     
        <BrowserRouter>
          <Routes>
            <Route path="/basvuru-olustur" element={<FormPage />} />
            <Route path="/basvuru-basarili" element={<FormSubmitPage />} />
            <Route path="/admin" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
