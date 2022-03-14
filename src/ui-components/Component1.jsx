/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
import NavBar from "./NavBar";
export default function Component1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1224px"
      height="785px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Component1")}
    >
      <View {...getOverrideProps(overrides, "Rectangle 1")}></View>
      <Image
        position="absolute"
        top="23.44%"
        bottom="11.59%"
        height="64.97%"
        left="41.26%"
        right="8.74%"
        width="50%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "istockphoto-1224838022-612x612 1")}
      ></Image>
      <Flex {...getOverrideProps(overrides, "Badge")}></Flex>
      <NavBar
        width="1224px"
        position="absolute"
        backgroundColor="rgba(40,49,58,1)"
        display="flex"
        top="0%"
        bottom="88.15%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
      <Image
        position="absolute"
        top="3.06%"
        bottom="91.21%"
        height="5.73%"
        left="1.31%"
        right="94.61%"
        width="4.08%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "amazon-web-services_contact-center-as-a-service_1599243419063 4"
        )}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.81px"
        position="absolute"
        top="4.33%"
        bottom="92.61%"
        left="6.78%"
        right="75.57%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Amazon Connect"
        {...getOverrideProps(overrides, "Amazon Connect")}
      ></Text>
      <View
        position="absolute"
        top="3.06%"
        bottom="91.21%"
        left="93.87%"
        right="2.45%"
        borderRadius="45px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "profile-user (1) 2")}
      ></View>
    </View>
  );
}
