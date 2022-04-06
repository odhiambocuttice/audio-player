import "./home.css";
import { AudioPlayer } from "../audioplayer/AudioPlayer";
import { tracks } from "../../tracks";
import { FeaturedPosts } from "./FeaturedPosts/FeaturedPosts";
import { About } from "../about/About";
import { Shows } from "../shows/Shows";
import { TopBar } from "../TopBar/TopBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Home = () => {
  return (
    <Router>
      <div className="home">
        <TopBar />
        <section className="section">
          <AudioPlayer tracks={tracks} />
        </section>
        <section className="post-section">
          <FeaturedPosts />
        </section>
        <section>
          <Shows />
        </section>
        <section>
          <About />
        </section>
      </div>
    </Router>
  );
};
