import { makeStyles } from "@material-ui/core";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import TrendingUpTwoToneIcon from "@material-ui/icons/TrendingUpTwoTone";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import * as React from "react";
import styles from "../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import Card from "../mtrlDashboard/Card/Card";
import CardFooter from "../mtrlDashboard/Card/CardFooter";
import CardHeader from "../mtrlDashboard/Card/CardHeader";
import CardIcon from "../mtrlDashboard/Card/CardIcon";
import GridContainer from "../mtrlDashboard/Grid/GridContainer";
import GridItem from "../mtrlDashboard/Grid/GridItem";
import Danger from "../mtrlDashboard/Typography/Danger";
import Warning from "../mtrlDashboard/Typography/Warning";

const useStyles = makeStyles(styles as any);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <GridContainer>
          <GridItem {...{ xs: 12, sm: 6 }}>
            <Card>
              <CardHeader stats icon>
                <CardIcon color="success">
                  <AccessAlarmIcon />
                </CardIcon>
                <p className={classes.allText}>New Requests </p>
                <h3 className={classes.allText}>
                  29/50 <small>Request</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Get more info
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem {...{ xs: 12, sm: 6 }}>
            <Card>
              <CardHeader stats icon>
                <CardIcon color="info">
                  <VisibilityTwoToneIcon />
                </CardIcon>
                <p className={classes.allText}> Finished Tasks </p>
                <h3 className={classes.allText}>
                  2150 <small>View</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Get more info
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem {...{ xs: 12, sm: 6 }}>
            <Card>
              <CardHeader stats icon>
                <CardIcon color="danger">
                  <TrendingUpTwoToneIcon />
                </CardIcon>
                <p className={classes.allText}> Average Conversion Rate </p>
                <h3 className={classes.allText}>
                  8.30 <small>%</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Get more info
                  </a>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </>
  );
}
