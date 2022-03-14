/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
import NavBar from "./NavBar";
export default function Dashboard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1512px"
      height="982px"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Dashboard")}
    >
      <View
        width="220px"
        height="100px"
        position="absolute"
        top="10px"
        left="720px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 417")}
      ></View>
      <NavBar
        width="2131px"
        position="absolute"
        display="flex"
        top="0px"
        left="-154px"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
    </View>
  );
}
