/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Component1 from "./Component1";
import { View } from "@aws-amplify/ui-react";
export default function NewDashboard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1535px"
      height="895px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,229,229,1)"
      {...rest}
      {...getOverrideProps(overrides, "NewDashboard")}
    >
      <View
        width="1535px"
        height="123px"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 2")}
      >
        <Component1
          position="absolute"
          top="0%"
          bottom="5.07%"
          left="0%"
          right="0%"
          {...getOverrideProps(overrides, "Component 1")}
        ></Component1>
      </View>
    </View>
  );
}
