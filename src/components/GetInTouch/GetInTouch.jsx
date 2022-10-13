import { Button } from '@material-ui/core';
import './GetInTouch.css';
import { makeStyles } from '@material-ui/core/styles';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
const useStyles = makeStyles({
  btn: {
    color: 'aquamarine',
    border: '0.1rem solid aquamarine',
    padding: '0.5rem 1.5rem',
    borderRadius: 0,
    marginTop: '3rem',
    fontSize: '1.3rem',
    textTransform: 'none',
  },
});
const GetInTouch = ({ email }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  const classes = useStyles();
  return (
    <div data-aos="fade">
      <div id="GetInTouchMain" className="GetInTouchContainer sectionHeading">
        <h2 className="GetInTouch">Get In Touch</h2>
        <p className="works GetIntouchText">
          I'm currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I'll get
          back to you!
        </p>
        <a className="headerLinks" href={`mailto: ${email}`}>
          <Button className={classes.btn} variant="outlined" size="large">
            Say Hello
          </Button>
        </a>
      </div>
    </div>
  );
};
export default GetInTouch;
