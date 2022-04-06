import "./writestory.css";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

export const WriteStory = () => {
  return (
    <div className="writeStory">
      <div className="writeStoryForm">
        <div className="writeStoryFormGroup">
          <label htmlFor="ImgInput">
            <AddToPhotosIcon className="addInputIcon" />
          </label>

          <input type="file" id="ImgInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Story Title"
            className="writeTitle"
            autoFocus={true}
          />
        </div>
        <div className="writeStoryFormGroup">
          {/* <label htmlFor="ImgInput">
            <AddToPhotosIcon />
          </label> */}
          <textarea
            className="writeTitle story"
            type="text"
            placeholder="Tell the artist's story"
            autoFocus={true}
          ></textarea>
        </div>
        <button className="storySubmit">Publish</button>
      </div>
    </div>
  );
};
