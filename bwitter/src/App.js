import { Routes, Route, Navigate } from "react-router-dom";
import axios from 'axios'

import { LoginPage } from "./pages/loginPage";
import { RegisterPopup } from "./components/register";
import { HomePage } from "./pages/homePage";
import { SignInPopup } from "./components/signIn";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./redux/userSlice";

function App() {
  // untuk keeplogin
  const id = localStorage.getItem("id")
  // console.log(id);

  // untuk ngelempar data ke redux pakai useDispatch ???
  const dispatch = useDispatch()

  // async dipakai ketika ingin manggil data ke server
  const keepLogin = async () => {
    try {
      const response = await axios.get(`http://localhost:2000/users/${id}`)
      // console.log(response.data);
      dispatch(setData(response.data[0]))
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    keepLogin()
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={id ? <Navigate to="/home" /> : <LoginPage />} />
        <Route path="/register" element={<RegisterPopup />} />
        <Route path="/signin" element={<SignInPopup />} />
        <Route path="/home" element={id ? <HomePage /> : <Navigate to="/" />} />
      </Routes>
    </div>
  );
}
export default App;
