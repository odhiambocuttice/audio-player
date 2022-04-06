import "./allstories.css";
import { TopBar } from "../../TopBar/TopBar";
import { OneStory } from "../OneStory/OneStory";
import { About } from "../../about/About";
// import { PlayPauseButton } from "../../audioplayer/PlayPauseButton";

export const AllStories = () => {
  return (
    <div className="AllStories">
      <OneStory />
      <OneStory />
      <OneStory />
      <OneStory />
      <TopBar />
      <About />
      {/* <PlayPauseButton /> */}
    </div>
  );
};
