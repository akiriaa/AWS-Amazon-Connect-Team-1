/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
import Navigation from "./Navigation";
export default function Recordings1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1515px"
      height="982px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Recordings1")}
    >
      <View {...getOverrideProps(overrides, "RecordingsPage")}></View>
      <Navigation
        position="absolute"
        top="0%"
        bottom="90.73%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Navigation")}
      ></Navigation>
    </View>
  );
}
