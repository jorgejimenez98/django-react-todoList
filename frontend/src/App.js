import "./App.css";
import Header from "./components/Header";
import Casa from "./components/Casa";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Route path="/" component={Casa} exact />
      </main>
    </Router>
  );
}

export default App;
