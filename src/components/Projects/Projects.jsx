import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import './Project.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import GithubBG from '../../resources/github.jpg';

const Projects = ({ projects }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div id="projectMain" className="sectionHeading">
      <h1 className="works AboutMeHeading WorkHeading">
        Some Things I've Built
      </h1>
      <div data-aos="fade">
        {projects.map((element) => {
          return (
            <div
              key={element.key}
              className={
                element.key % 2 === 0 ? 'Projectcard1' : 'Projectcard2'
              }
            >
              <div className="scraperImage" src={GithubBG} />
              <div
                className={
                  element.key % 2 === 0
                    ? 'ProjectDescBlock1'
                    : 'ProjectDescBlock2'
                }
              >
                <p className="greenText FeaturedProjects">Featured Project</p>
                <h2 className="ProjectName">
                  <b>{element.name}</b>
                </h2>
                <div className="ProjectDesc">
                  <p className="descproject">{element.desc}</p>
                </div>
                <p className="FrameWorks">{element.stack}</p>
                <a
                  href="https://github.com/golfsierraAI/ScrapeDsaToSheet"
                  target="_blank"
                  className="icons"
                  rel="noreferrer"
                >
                  <GitHubIcon />
                </a>
              </div>
              <div
                className={
                  element.key % 2 === 0
                    ? 'ProjectImageCover1'
                    : 'ProjectImageCover2'
                }
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
