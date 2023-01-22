import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dash from "./pages/dash.js";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Log from "./pages/log";
import Login from "./pages/login";
import QuizResult from "./pages/QuizResult/index.js";
import Reg from "./pages/reg";
import Register from "./pages/register";
import ToDo from "./pages/todo/index.js";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizResult/>} />
          <Route path="/todo" element={<ToDo/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reg" element={<Reg />} />
          <Route path="/log" element={<Log />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}
export default App;