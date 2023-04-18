
import './App.css';
import CreatePost from "./pages/CreatePost";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {useState} from "react";

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

function App() {
  const [isAuth, setIsAuth] = useState(false);
return (
   <Router>
    <nav>
      <Link to ="/">Home</Link>
      <Link to ="/createpost"> Create Post </Link>
      <Link to ="/login"> Login </Link>


    </nav>
    <Routes>
      <Route path = "/" element ={<Home />} />
      <Route path = "/createPost" element ={<CreatePost/>} />
      <Route path = "/login" element ={<Login/>} />
    </Routes>
   </Router>
  );
}

export default App;
