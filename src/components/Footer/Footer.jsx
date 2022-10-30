import './Footer.css';
import Merge from '../../resources/merge.svg';
var Footer = () => {
  var color = () => {
    var [icon] = document.getElementsByClassName('MergeIcon');
    icon.style.filter = 'grayscale(0%)';
  };
  var decolor = () => {
    var [icon] = document.getElementsByClassName('MergeIcon');
    icon.style.filter = 'grayscale(100%)';
  };
  return (
    <div
      onMouseLeave={decolor}
      onMouseEnter={color}
      className="Footer FooterText"
    >
      <p className="FooterText bottomlink">
        Designed by
        <a
          className="noUnderLine"
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Brittany Chiang&nbsp;
        </a>
        and Built by
        <a
          className="noUnderLine"
          href="https://arun-portfolio.netlify.app/"
          target="_blank"
        >
          &nbsp;Arun
        </a>
      </p>
      <img className="MergeIcon" src={Merge} />
    </div>
  );
};
export default Footer;
