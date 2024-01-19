import Account from "./Pages/Account"
import Homescreen from "./Pages/Homescreen"
import Login from "./Pages/Login"
import Pending from "./Pages/Pending"
import Signup from "./Pages/Signup"
import Transaction from "./Pages/Transaction"
import Trustfund from "./Pages/Trustfund"
import Landingpage from "./Startpage/Landingpage"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
 

  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landingpage/>}    />
            <Route path="/login" element={<Login/>}    />
            <Route path="/signup" element={<Signup/>}    />
            <Route path="/homescreen" element={<Homescreen/>}    />
            <Route path="/trustfund" element={<Trustfund/>}    />
            <Route path="/transaction" element={<Transaction/>}    />
            <Route path="/account" element={<Account/>}    />
            <Route path="/pending" element={<Pending/>}    />
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
