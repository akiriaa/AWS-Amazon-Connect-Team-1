/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, View } from "@aws-amplify/ui-react";
export default function MacBookPro141(props) {
  const { Recordings, overrides, ...rest } = props;
  const navBarOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: "",
  });
  return (
    <View
      width="1512px"
      height="982px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "MacBookPro141")}
    >
      <Flex
        onClick={() => {
          navBarOnClick();
        }}
        {...getOverrideProps(overrides, "NavBar")}
      ></Flex>
      <Image
        position="absolute"
        top="3.16%"
        bottom="90.88%"
        height="5.96%"
        left="2.12%"
        right="94.58%"
        width="3.31%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(
          overrides,
          "amazon-web-services_contact-center-as-a-service_1599243419063 4"
        )}
      ></Image>
    </View>
  );
}
