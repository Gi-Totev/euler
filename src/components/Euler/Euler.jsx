import { Link } from "react-router-dom";
import { Container, Typography, Divider, Button } from "@material-ui/core";
import data from "../../data/data";
import useStyles from "./styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Euler = (props) => {
  const projectId = props.location.pathname.split("/")[2];

  const { name, id, desc, expected } = data.problems[projectId];
  const Element = data.solutions[projectId];

  const classes = useStyles();

  return (
    <Container className={classes.mainContainer}>
      <div className={classes.icons}>
        {projectId > 1 && (
          <Link to={`/euler/${projectId - 1}`} className={classes.leftArrow}>
            <ChevronLeftIcon className={classes.svg} />
          </Link>
        )}
        {projectId < data.problems.length && (
          <Link
            to={`/euler/${Number(projectId) + 1}`}
            className={classes.rightArrow}
          >
            <ChevronRightIcon className={classes.svg} />
          </Link>
        )}
      </div>
      <Button
        variant="contained"
        color="primary"
        className={classes.back}
        size="small"
      >
        <Link to="/" className={classes.backLink}>
          Back To Home
        </Link>
      </Button>
      <Typography variant="h4" className={classes.name}>
        {id}: {name} -{" "}
        <Link to="" target="_blank" className={classes.link}>
          Code
        </Link>
      </Typography>
      <Divider className={classes.divider} />
      <Typography className={classes.description} variant="body1">
        <strong>Description:</strong>
        <br />
        <span dangerouslySetInnerHTML={{ __html: desc }}></span>
      </Typography>
      <Typography className={classes.expected} variant="body1">
        <strong>Expected:</strong>
        <br />
        <span dangerouslySetInnerHTML={{ __html: expected }}></span>
      </Typography>
      <Element classes={classes} />
    </Container>
  );
};

export default Euler;
