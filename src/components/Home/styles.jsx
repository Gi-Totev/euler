import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    padding: "2rem",
  },
  smallText: {
    textAlign: "center",
    fontWeight: "700",
    fontStyle: "italic",
  },
  divider: {
    marginTop: "1rem",
    marginBottom: "2rem",
    backgroundColor: "purple",
    height: "0.2rem",
    width: "50%",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
  grid: {
    marginTop: "3rem",
  },
}));
