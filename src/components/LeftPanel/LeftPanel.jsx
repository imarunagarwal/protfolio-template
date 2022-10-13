import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './LeftPanel.css';

var LeftPanel = ({ profileLinks }) => {
  return (
    <div className="leftCont">
      <div className="iconsCont">
        <a
          className="icons"
          href={profileLinks.instaLink}
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          className="icons"
          href={profileLinks.githubLink}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          className="icons"
          href={profileLinks.linkedInLink}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <div className="line"></div>
    </div>
  );
};
export default LeftPanel;
