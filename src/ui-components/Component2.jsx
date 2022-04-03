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
      <Flex
        gap="63px"
        position="absolute"
        top="100%"
        bottom="-100%"
        left="0%"
        right="0%"
        direction="row"
        height="95px"
        alignItems="center"
        padding="0px 0px 0px 0px"
        backgroundImage="linear-gradient(-90deg, rgba(49,126,150,1), rgba(49,126,150,0))"
        {...getOverrideProps(overrides, "NewNav")}
      ></Flex>
      <Component1
        display="flex"
        gap="166px"
        position="absolute"
        top="0%"
        bottom="5.07%"
        left="0%"
        right="0%"
        direction="row"
        width="1619px"
        height="90.18px"
        justifyContent="center"
        alignItems="center"
        padding="0px 4px 0px 4px"
        backgroundColor="rgba(49,126,150,1)"
        {...getOverrideProps(overrides, "Component 1")}
      ></Component1>
    </View>
  );
}
