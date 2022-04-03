/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Recordings1 from "./Recordings1";
import Component1 from "./Component1";
import { View } from "@aws-amplify/ui-react";
export default function RecordingsPage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1512px"
      height="982px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "RecordingsPage")}
    >
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Group 70")}
      >
        <Recordings1
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Recordings1")}
        ></Recordings1>
        <Component1
          display="flex"
          gap="166px"
          position="absolute"
          top="0%"
          bottom="89.31%"
          left="0%"
          right="0%"
          direction="row"
          width="1512px"
          height="105px"
          justifyContent="center"
          alignItems="center"
          padding="0px 4px 0px 4px"
          backgroundColor="rgba(49,126,150,1)"
          {...getOverrideProps(overrides, "Component 1")}
        ></Component1>
      </View>
    </View>
  );
}
