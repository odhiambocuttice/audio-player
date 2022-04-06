import "./singlePost.css";
import post from "../../../assets/showsPosters/post.jpg";

export const SinglePost = () => {
  return (
    <div className="single-post">
      <img src={post} alt="" />
      <div className="post-info">
        <div className="post-title">
          <span>BOB's Burger</span>
          <span className="post-date"> written 1 hour ago</span>
        </div>
        <div className="post-write">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quasi
            sunt, expedita provident alias amet aut inventore ipsa minima,
            doloremque magni quis iure harum! Consectetur, necessitatibus!
            Impedit saepe obcaecati veniam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eaque quasi sunt, expedita provident
            alias amet aut inventore ipsa minima, doloremque magni quis iure
            harum! Consectetur, necessitatibus! Impedit saepe obcaecati veniam!
          </p>
        </div>
      </div>
    </div>
  );
};
