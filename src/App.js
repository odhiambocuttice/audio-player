import { Home } from "./components/Pages/Home";
// import { TopBar } from "./components/TopBar/TopBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <TopBar /> */}
      <Home />
    </>
  );
};

export default App;
