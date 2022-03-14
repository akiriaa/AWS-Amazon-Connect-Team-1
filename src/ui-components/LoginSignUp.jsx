/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function LoginSignUp(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1224px"
      height="831px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "LoginSignUp")}
    >
      <View {...getOverrideProps(overrides, "Rectangle 1")}></View>
      <Flex {...getOverrideProps(overrides, "TextField")}></Flex>
      <Flex {...getOverrideProps(overrides, "Buttonhcy")}></Flex>
      <Flex {...getOverrideProps(overrides, "Buttonovc")}></Flex>
      <View
        width="353px"
        height="70px"
        position="absolute"
        top="98px"
        left="613px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Icon
        width="354px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 354, height: 0 }}
        paths={[
          {
            d: "M0 0L354 0L354 -2L0 -2L0 0Z",
            stroke: "rgba(221,222,224,1)",
            fillRule: "nonzero",
            strokeWidth: 2,
          },
        ]}
        position="absolute"
        top="98px"
        left="966px"
        transformOrigin="top left"
        transform="rotate(180deg)"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
      <Icon
        width="354px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 354, height: 0 }}
        paths={[
          {
            d: "M0 0L354 0L354 -2L0 -2L0 0Z",
            stroke: "rgba(4,125,149,1)",
            fillRule: "nonzero",
            strokeWidth: 2,
          },
        ]}
        position="absolute"
        top="98px"
        left="612px"
        transformOrigin="top left"
        transform="rotate(180deg)"
        {...getOverrideProps(overrides, "Line 2")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(4,125,149,1)"
        lineHeight="48px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.81px"
        position="absolute"
        top="109px"
        left="392px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sign In"
        {...getOverrideProps(overrides, "Sign In")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(53,65,81,1)"
        lineHeight="48px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.81px"
        position="absolute"
        top="109px"
        left="691px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create Account"
        {...getOverrideProps(overrides, "Create Account")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(4,125,149,1)"
        lineHeight="20px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="533px"
        left="527px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Forgot your password?"
        {...getOverrideProps(overrides, "Forgot your password?")}
      ></Text>
      <Flex {...getOverrideProps(overrides, "PasswordField")}></Flex>
    </View>
  );
}
