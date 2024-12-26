import Sidebar from "./Components/topbar/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import './app.css';
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./pages/home/userList/UserList";
import User from "./pages/home/userPage/User";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
