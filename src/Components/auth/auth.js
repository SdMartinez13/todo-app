import { useContext } from "react";
import { When } from "react-if";
import { AuthContext } from "../auth/context";

const Auth = ({ capability, children }) => {
  const { can, loggedIn } = useContext(AuthContext);

  return (
    <When condition={loggedIn && can(capability)}>
      {children}
    </When>
  )
}

export default Auth;