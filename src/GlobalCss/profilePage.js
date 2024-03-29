import { container, title } from "./material-kit-react.js";

import imagesStyle from "./imagesStyles";

const profilePageStyle = {
  container,
  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "160px",
      width: "100%",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },
  description: {
    margin: "0 auto",
    width: "70%",
    color: "#999",
    textAlign: "center !important"
  },
  page: {
    marginTop: 50,
    minWidth: "50vw"
  },
  name: {
    // marginTop: "-80px"
  },
  ...imagesStyle,
  main: {
    background: "#FFFFFF",
    position: "relative",
    minWidth: "70vw",
    zIndex: "1",
    marginTop: "400px",
    minHeight: "600px"
  },
  mainRaised: {
    margin: "50px  30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",

    textAlign: "center",
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },
  moreButton: {
    margin: 16,
  },
  botButton: {
    marginBottom: 15,
  },
  buttons: {
    display: 'flex',
    justifyContent: "center",
  },
};

export default profilePageStyle;
