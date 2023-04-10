import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Component/Sidebar";
import MainContent from "./Component/MainContent";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
