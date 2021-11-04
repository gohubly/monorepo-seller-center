import React from "react";
import { AuthenticationContext } from "./AuthenticationContext";

export const useAuthContext = () => React.useContext(AuthenticationContext)