import React, { useEffect } from "react";
import Footer1 from "../../components/Footer/Footer1";
import Footer2 from "../../components/Footer/Footer2";
import Navbar from "../../components/Navbar/Navbar";
import SingleBanner from "../../components/Banner/SingleBanner";
import about from '../../assets/images/about.png'
import story from '../../assets/images/story.avif'
import who from '../../assets/images/who.avif'
import where from '../../assets/images/where.avif'
import "./ExtraPages.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar reloadNavbar={false} />
      <SingleBanner
        heading="About us"
        bannerimage={about}
      />
      <div className="pgleft pgcommon">
        <img
          src={story}
          alt="no image"
        />
        <div>
          <h1>Our Story</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="pgright pgcommon">
        <img
          src={who}
          alt="noimg"
        />

        <div>
          <h1>Who are we</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="pgright pgcommon">
        <img
          src={where}
          alt="noimg"
        />

        <div>
          <h1>Who are we</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default About;
