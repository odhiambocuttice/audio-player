import { SinglePost } from "../singlePost/SinglePost";
import "./featuredposts.css";

export const FeaturedPosts = () => {
  return (
    <div className="major-post">
      <p className="title-post">Featured Stories</p>
      <div className="posts">
        <SinglePost />
        <SinglePost />
      </div>
    </div>
  );
};
