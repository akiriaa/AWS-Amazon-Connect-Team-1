/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Dashboard from "./Dashboard";
import { View } from "@aws-amplify/ui-react";
export default function HomepageFrame(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1512px"
      height="982px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "HomepageFrame")}
    >
      <Dashboard
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Dashboard")}
      ></Dashboard>
    </View>
  );
}
