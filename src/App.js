import "./App.css";
import { ERC20Abi, ERC721Abi, ERC1155Abi } from "./SupportedNetwork";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import CreateTransfer from "./CreateTransfer";
import "react-toastify/dist/ReactToastify.css";

function App() {
  console.log("20Abi is", ERC20Abi);
  console.log("720Abi is", ERC721Abi);
  console.log("1155Abi is", ERC1155Abi);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/createTransfer" element={<CreateTransfer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
