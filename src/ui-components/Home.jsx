/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, View } from "@aws-amplify/ui-react";
import Navigation from "./Navigation";
export default function Home(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1713px"
      height="1037px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Home")}
    >
      <Flex {...getOverrideProps(overrides, "ContactPage")}></Flex>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="0%"
        bottom="89.87%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Group 322")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 430")}
        >
          <Navigation
            width="1713px"
            height="105px"
            position="absolute"
            top="0px"
            left="0px"
            {...getOverrideProps(overrides, "Navigation")}
          ></Navigation>
          <Button
            position="absolute"
            border="1px SOLID rgba(0,0,0,0)"
            borderRadius="4px"
            padding="7px 15px 7px 15px"
            display="flex"
            top="33px"
            left="735px"
            backgroundColor="rgba(0,0,0,0)"
            size="large"
            variation="primary"
            children=" Recordings"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </View>
      </View>
    </View>
  );
}
