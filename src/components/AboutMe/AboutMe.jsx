import AOS from 'aos';
import { useEffect } from 'react';
import './AboutMe.css';

var AboutMe = ({
  aboutMeKey,
  imageUrl,
  aboutMeDescription,
  workShorDesc,
  techStack,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  var imageSlider = () => {
    var [border] = document.getElementsByClassName('myImgBorder');
    border.style.transform = 'translate(0.2rem, -0.3rem)';
    border.style.transitionDuration = '0.3s';
  };
  var imageSlideBack = () => {
    var [border] = document.getElementsByClassName('myImgBorder');
    border.style.transform = 'rotate(0deg)';
  };

  return (
    <div data-aos="fade">
      <div id="aboutMain" className="sectionHeading">
        <h3 className="greenText ">
          <span className="works AboutMeHeading ">{aboutMeKey}</span>
        </h3>
        <div className="AboutMeCont">
          <p className="aboutMetext">{aboutMeDescription}</p>
          <a href="#">
            <img className="myImg" src={imageUrl} referrerPolicy="no-referrer"></img>
          </a>
          <div className="myImgBorder"></div>
          <div
            onMouseEnter={imageSlider}
            onMouseLeave={imageSlideBack}
            className="myImgFilter"
          />
        </div>
        <p className="works techStack">{workShorDesc}</p>
        <ul className="works skillUl">
          {techStack.map((item, key) => (
            <li key={key}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AboutMe;
