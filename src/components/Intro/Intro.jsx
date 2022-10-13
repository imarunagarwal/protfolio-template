import './Intro.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  btn: {
    color: 'aquamarine',
    border: '0.1rem solid aquamarine',
    padding: '0.9rem 2rem',
    borderRadius: 0,
  },
});
var Intro = ({ intro, email }) => {
  const classes = useStyles();
  return (
    <div className="IntroContainer">
      <h4 className="hi">{intro.hiText}</h4>
      <h1 className="name">
        {intro.name}
        <span className="buildthings">{intro.shortDesc}</span>
      </h1>
      <h4 className="works">{intro.longDesc}</h4>
      <a className="headerLinks" href={`mailto: ${email}`}>
        <Button className={classes.btn} variant="outlined" size="large">
          Get In Touch
        </Button>
      </a>
    </div>
  );
};
export default Intro;
