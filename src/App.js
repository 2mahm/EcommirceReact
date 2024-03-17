import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyNav from "./components/MyNav";
import Homepage from "./pages/Homepage";
import Storepage from "./pages/Storepage";
//import { Container } from 'react-bootstrap';
import SearchProvider from "../src/context/Shoopingprovider";
import { ProductProvider } from "./context/ProductContext";
import Footer from "./components/Footer";
import Contactpage from "./pages/Contactpage";
import Aboutpage from "./pages/Apoutpage";
import Formpage from "./pages/Formpage";
import RegisterForm from "./components/RegisterForm";
import Crudpage from "./pages/Crudpage";
import UserForm from "./components/Addusre";
import UserFormpage from "./pages/UserFormpage";
import Crud from "./components/Crud";
function App() {
  return (
    <ProductProvider>
      <SearchProvider>
        <div style={{ height: "100vh" }}>
          <MyNav />

          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/Home" element={<Homepage />}></Route>
            <Route path="/Storepage" element={<Storepage />}></Route>
            <Route path="/Contactpage" element={<Contactpage />}></Route>
            <Route path="/Aboutpage" element={<Aboutpage />}></Route>
            <Route path="/Formpage" element={<Formpage />}></Route>
            <Route path="/RegisterForm" element={<RegisterForm />}></Route>
            <Route path="/Crudpage" element={<Crudpage />}></Route>

            <Route path="/UserForm" element={<UserForm />}></Route>
            <Route path="/Crud" element={<Crud />}></Route>
          </Routes>
          <Footer />
        </div>
      </SearchProvider>
    </ProductProvider>
  );
}

export default App;
