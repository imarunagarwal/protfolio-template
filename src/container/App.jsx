import ReactLoading from 'react-loading';
import { useEffect, useState } from 'react';
import Header from './../components/Header/Header';
import Intro from './../components/Intro/Intro';
import LeftPanel from './../components/LeftPanel/LeftPanel';
import RightPanel from './../components/RightPanel/RightPanel';
import AboutMe from './../components/AboutMe/AboutMe';
import Org from './../components/Organisations/Org';
import Projects from './../components/Projects/Projects';
import GetInTouch from './../components/GetInTouch/GetInTouch';
import Footer from './../components/Footer/Footer';
import data from './App_data';
import './App.css';

function App() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div style={{ width: '100vw' }}>
          <Header
            name={data.intro.name}
            resumeLink={data.profileLinks.resumeLink}
            resumeLinkDownloadFileName={
              data.profileLinks.resumeLinkDownloadFileName
            }
          />
          <Intro intro={data.intro} email={data.email} />
          <LeftPanel profileLinks={data.profileLinks} />
          <RightPanel email={data.email} />
          <div className="mainContainer">
            <AboutMe
              aboutMeKey={data.aboutMe.aboutMeKey}
              imageUrl={data.aboutMe.imageUrl}
              aboutMeDescription={data.aboutMe.aboutMeDescription}
              workShorDesc={data.aboutMe.workShorDesc}
              techStack={data.aboutMe.techStack}
            />
            <Org
              whereIWorkedKey={data.Org.whereIWorkedKey}
              orgs={data.Org.orgs}
            />
            <Projects projects={data.projects} />
            <GetInTouch email={data.email} />
            <Footer />
          </div>
        </div>
      ) : (
        <div className="loader">
          <ReactLoading type={'bars'} color={'aquamarine'} width={100} />
        </div>
      )}
    </div>
  );
}

export default App;
