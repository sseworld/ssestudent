import "./App.css";
import { Header, NotFound, Footer, ShowOne } from "./Components";
import { Home, AddStudent } from "./Pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="*" Component={NotFound} />
          <Route path="/add-student" Component={AddStudent} />
          <Route path="/get/:id" Component={ShowOne} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
