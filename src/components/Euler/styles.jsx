import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  mainContainer: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    paddingTop: "1rem",
  },
  back: {
    marginBottom: "0.5rem",
  },
  backLink: {
    textDecoration: "none",
    color: "#fff",
  },
  link: {
    color: "purple",
    textDecoration: "none",
  },
  name: {
    marginTop: "2rem",
  },
  icons: {
    width: "100%",
    position: "absolute",
    padding: "1rem",
    top: 0,
    left: 0,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
  },
  leftArrow: {
    position: "absolute",
    top: "1rem",
    left: "5%",
  },
  rightArrow: {
    position: "absolute",
    top: "1rem",
    right: "5%",
  },
  svg: {
    color: "purple",
    fontSize: "3rem",
  },
  divider: {
    marginTop: "1rem",
    backgroundColor: "purple",
    height: "0.2rem",
    width: "50%",
  },
  description: {
    padding: "2rem 0",
    width: "65%",
  },
  expected: {
    paddingTop: "1rem",
    paddingBottom: "2rem",
    width: "65%",
  },
  elementContainer: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
  },
  inputField: {
    paddingTop: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&>*": {
      margin: "0.5rem 0",
    },
  },
  textField: {
    textAlign: "center",
  },
  result: {
    padding: "2rem",
  },
}));
