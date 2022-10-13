import './Header.css';
const Header = ({ name, resumeLink, resumeLinkDownloadFileName }) => {
  var reload = () => {
    window.location.reload();
  };
  var ScrollToAbout = () => {
    var about = document.getElementById('aboutMain');
    about.scrollIntoView();
  };
  var ScrollToExperience = () => {
    var about = document.getElementById('workMain');
    about.scrollIntoView();
  };
  var ScrollToWork = () => {
    var about = document.getElementById('projectMain');
    about.scrollIntoView();
  };
  var ScrollToContactMe = () => {
    var about = document.getElementById('GetInTouchMain');
    about.scrollIntoView();
  };

  // TODO Optimization needed
  const initials = name
    .split(' ')
    .filter((c, i) => (i < 2 ? c : undefined))
    .map((c) => !!c && c.charAt(0))
    .join('')
    .toUpperCase();

  return (
    <div className="Header">
      <div onClick={reload} className="logoContainer">
        <div className="initials">{initials}</div>
      </div>
      <div className="linkContainer">
        <a onClick={ScrollToAbout} className="headerLinks">
          About
        </a>
        <a className="headerLinks" onClick={ScrollToExperience}>
          Experience
        </a>
        <a className="headerLinks" onClick={ScrollToWork}>
          Work
        </a>
        <a className="headerLinks" onClick={ScrollToContactMe}>
          Contact
        </a>
        <a
          className="headerLinks padding-right-2rem"
          href={resumeLink}
          download={resumeLinkDownloadFileName}
        >
          <span className="resume">Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
