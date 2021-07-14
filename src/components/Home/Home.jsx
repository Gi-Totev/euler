import {
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/data";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="h4">Project Euler</Typography>
      <Divider className={classes.divider} />
      <Typography variant="body1" className={classes.smallText}>
        Project Euler is a series of challenging problems that require
        mathematical and programming skills. Click on any of the buttons below
        to see the problem and test the solution.
      </Typography>
      <Grid container spacing={2} className={classes.grid}>
        {data.problems.map(
          (item) =>
            item && (
              <Grid item xs={1} key={`link__${item.id}`}>
                <Link to={`/euler/${item.id}`} className={classes.link}>
                  <Button variant="contained" color="primary">
                    {item.id}
                  </Button>
                </Link>
              </Grid>
            )
        )}
      </Grid>
    </Container>
  );
};

export default Home;
