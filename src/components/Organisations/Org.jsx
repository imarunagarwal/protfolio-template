import React, { useEffect } from 'react';
import AOS from 'aos';
import './Org.css';
import 'aos/dist/aos.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography variant="inherit" color="initial">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'flex-start',
    color: 'white',
    paddingLeft: '3rem',
  },
  indicator: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
  },
  Tab: {
    textTransform: 'none',
    borderLeft: '0.16rem solid grey',
    '&:focus': {
      backgroundColor: '#112240',
      color: 'aquamarine',
    },
    '&:hover': {
      color: 'aquamarine',
    },
  },
  panel: {
    height: '25rem',
    width: '40rem',
  },
  desc: {
    color: '#8892b0',
    fontSize: '1rem',
  },
}));

export default function Org({ whereIWorkedKey, orgs }) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div data-aos="fade">
      <div id="workMain" className="orgCont">
        <h1 className="works AboutMeHeading WorkHeading">{whereIWorkedKey}</h1>
        <div className={classes.root}>
          <Tabs
            classes={{ indicator: classes.indicator }}
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            {orgs.map((org, index) => (
              <Tab
                key={index}
                disableRipple
                className={classes.Tab}
                label={org.label}
                {...a11yProps(0)}
              />
            ))}
          </Tabs>
          {orgs.map((org, index) => {
            return (
              <TabPanel key={index} className={classes.panel} value={value} index={index}>
                <div>
                  <Typography variant="h5" color="initial">
                    {org.prefix}
                    <span className="greenText"> @ {org.label}</span>
                  </Typography>
                  <Typography variant="body2" color="initial">
                    {org.time}
                  </Typography>
                  <ul className="skillUl">
                    {org.list.map((item, idx) => (
                      <li key={idx}>
                        <Typography
                          className={classes.desc}
                          variant="caption"
                          color="initial"
                        >
                          {item}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabPanel>
            );
          })}
        </div>
      </div>
    </div>
  );
}
