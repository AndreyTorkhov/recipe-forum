import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./RootStack";
import { setNavigationInterceptor } from "../Api/axiosConfig";

const Navigation = () => {
  const navigationRef = React.useRef();

  useEffect(() => {
    setNavigationInterceptor(navigationRef.current);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigation;
