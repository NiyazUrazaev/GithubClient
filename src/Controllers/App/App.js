import {connect} from "react-redux";
import {increment, decrement, reset, myProfile, exit, myRepos} from "../../Store/store";
import App from "../../Components/App/App";

const mapStateToProps = ({counter, name}) => ({
  counter,
  name
});

const mapDispatchToProps = dispatch => ({
  myProfile: () => dispatch(myProfile),
  myRepos: () => dispatch(myRepos),
  exit: () => dispatch(exit),
  increment: () => dispatch(increment),
  decrement: () => dispatch(decrement),
  reset: () => dispatch(reset)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
