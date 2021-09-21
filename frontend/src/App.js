import "./App.css";
import Header from "./components/Header";
import Casa from "./components/Casa";
import Comentarios from "./components/Comentarios";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

const routes = [
  { path: "/todos", component: Casa, exact: true },
  { path: "/todos/:todoId/comentarios", component: Comentarios, exact: false },
];

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Switch>
          {routes.map((route, idx) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => <route.component {...props} />}
                />
              )
            );
          })}
          <Redirect from="/" to="/todos" />
        </Switch>
        <Route path="/" component={Casa} exact />
      </main>
    </Router>
  );
}

export default App;
