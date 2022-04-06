import "./about.css";

export const About = () => {
  return (
    <div className="about">
      <div className="aboutLeft">
        <p className="aboutDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          delectus voluptate quam optio, eveniet tenetur dolor. Dolores neque
          perspiciatis quidem, cum aperiam enim error fugit quae, nihil
          accusantium, suscipit aliquam?
        </p>
        <div className="developer">
          <p>Thanks to</p>
          <ul className="devsocialsList">
            <li>
              <i className="devsocialsListIcon fab fa-github"></i>
            </li>
            <li>
              <i className="devsocialsListIcon fab fa-linkedin-in"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="aboutRight">
        <ul className="socialsList">
          <li className="socialsListItem">
            <i className=" socialsListIcon fab fa-instagram"></i>
          </li>
          <li className="socialsListItem">
            <i className="socialsListIcon fab fa-facebook-f"></i>
          </li>
          <li className="socialsListItem">
            <i className="socialsListIcon fab fa-youtube"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};
