import "./App.css";
import FormPage from "./views/Form/FormPage/FormPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FormPage />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
