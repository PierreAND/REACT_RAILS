import Navbar from "./Components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Components/Form/Form";
import LoginForm from "./Components/Form/LoginForm";
import Home from "./Containers/Home/Home";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Form />} />
          <Route path="/login" element={<LoginForm />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
