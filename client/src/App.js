import {Routes,Route} from "react-router-dom"


import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Netflix from "./pages/Netflix";
import Error from "./pages/Error";
import Home from "./pages/Home";



function App() {
  return (
    <div className="app bg-slate-50">

     <Routes>
      <Route path="/" element={<Home/>} />
<Route path="/netflix" element={<Netflix/>}/>

<Route path="*" element={<Error/>} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>

    </div>
  );
}

export default App;
