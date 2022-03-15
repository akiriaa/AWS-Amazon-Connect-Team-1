/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
import Component1 from "./Component1";
export default function Component2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1619px"
      height="95px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Component2")}
    >
      <Flex {...getOverrideProps(overrides, "NewNav")}></Flex>
      <Component1
        position="absolute"
        top="0%"
        bottom="5.07%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Component 1")}
      ></Component1>
    </View>
  );
}
