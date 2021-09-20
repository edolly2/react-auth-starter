import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = (props) => {
  const user = null;
  if (!user) {
    return <Redirect to="/login" />;
  } else {
    return;
    <Route {...props} />;
  }
};
