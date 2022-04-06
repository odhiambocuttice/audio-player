import alex from "../../assets/showsPosters/alex.jpg";
import "./singleshow.css";

export const SingleShow = () => {
  return (
    <div className="singleshows">
      <img src={alex} alt="" />
      <div className="showinfo">
        <span>RADIO SHOW</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
          laborum repudiandae ea quidem eum magni, tempora doloribus aliquam aut
          similique odio tenetur accusantium aspernatur consequuntur architecto
          sint itaque expedita dolore.
        </p>
        <span>PLAYTIME: 1100HRS</span>
        <p>CURATED BY: BLALALLA</p>
      </div>
    </div>
  );
};
