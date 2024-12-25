import Sidebar from "./Components/topbar/sidebar/Sidebar";
import Topbar from "./Components/topbar/Topbar";
import './app.css';
import Home from "./pages/home/Home";
function App() {
  return (
    <>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
    </>
  );
}

export default App;
