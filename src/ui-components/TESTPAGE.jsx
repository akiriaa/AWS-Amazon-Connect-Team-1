/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, View } from "@aws-amplify/ui-react";
export default function TESTPAGE(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="2261px"
      height="1441px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "TESTPAGE")}
    >
      <Button
        position="absolute"
        border="1px SOLID rgba(4,125,149,1)"
        display="flex"
        top="561px"
        left="195px"
        width="1443px"
        height="566px"
        size="default"
        variation="default"
        children="TEST BUTTOn"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
