import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyProfile from "./MyProfile";
import RepositorySearch from "./RepositorySearch";
import SearchTab from "./SearchTab";
import GET_USER_INFO from "../Queries/Get/user";
import GET_ORGANIZATION_INFO from "../Queries/Get/organization";

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      className="repos"
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color={"default"}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Profile" href="/my_profile" {...a11yProps(0)} />
          <LinkTab label="Repos" href="/repositories" {...a11yProps(1)} />
          <LinkTab label="Users" href="/users" {...a11yProps(2)} />
          <LinkTab label="Company" href="/organizations" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MyProfile/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <RepositorySearch/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SearchTab query={GET_USER_INFO} title={"Search users"} entityName={"user"} initial_input={"gaearon"}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SearchTab query={GET_ORGANIZATION_INFO} title={"Search organizations"}
                   entityName={"organization"} initial_input={"Twitter"}/>
      </TabPanel>
    </div>
  );
}