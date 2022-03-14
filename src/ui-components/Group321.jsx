/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Component3 from "./Component3";
import { View } from "@aws-amplify/ui-react";
export default function Group321(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1472px"
      height="1044px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Group321")}
    >
      <Component3
        position="absolute"
        top="3.93%"
        bottom="7.47%"
        left="0%"
        right="5.37%"
        {...getOverrideProps(overrides, "Component 3")}
      ></Component3>
    </View>
  );
}
