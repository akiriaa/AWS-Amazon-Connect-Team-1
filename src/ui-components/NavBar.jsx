/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, SearchField, Text } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="20px"
      direction="row"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="rgba(49,126,150,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBar")}
    >
      <Flex
        gap="2px"
        direction="row"
        width="19px"
        height="43px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      >
        <Icon
          width="28.27px"
          height="28.47px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 28.2724609375,
            height: 28.474853515625,
          }}
          paths={[
            {
              d: "M13.2356 1.86948C13.5992 1.11495 14.6737 1.11495 15.0373 1.86948L17.5201 7.02178C17.7143 7.42477 18.1525 7.64976 18.5932 7.57273L23.6705 6.6852C24.4495 6.54904 25.0708 7.32819 24.7647 8.05734L22.7544 12.8462C22.5885 13.2413 22.6928 13.6981 23.0136 13.9821L26.9027 17.4245C27.4949 17.9486 27.2731 18.9202 26.5122 19.1355L21.5147 20.5495C21.1024 20.6662 20.8102 21.0325 20.7882 21.4604L20.5217 26.6473C20.4811 27.4371 19.5832 27.8695 18.9405 27.4088L14.719 24.3832C14.3707 24.1336 13.9022 24.1336 13.5539 24.3832L9.33245 27.4088C8.6897 27.8695 7.79181 27.4371 7.75123 26.6473L7.48467 21.4604C7.46268 21.0325 7.17053 20.6662 6.75825 20.5495L1.76073 19.1355C0.999815 18.9202 0.778056 17.9486 1.3702 17.4245L5.25927 13.9821C5.58011 13.6981 5.68438 13.2413 5.51853 12.8462L3.50819 8.05734C3.20209 7.32819 3.82345 6.54904 4.60243 6.6852L9.67976 7.57273C10.1204 7.64976 10.5586 7.42476 10.7528 7.02178L13.2356 1.86948Z",
              fill: "rgba(20,155,252,1)",
              fillRule: "nonzero",
            },
          ]}
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Star 1")}
        ></Icon>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="40px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="260px"
        height="53px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Appleton Care"
        {...getOverrideProps(overrides, "Appleton Care")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="95px"
        height="27px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Recordings&#xA;"
        {...getOverrideProps(overrides, "Recordings")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="93px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Dashboard"
        {...getOverrideProps(overrides, "Dashboard")}
      ></Text>
      <SearchField
        gap="12px"
        display="flex"
        height="46px"
        justifyContent="space-between"
        alignItems="stretch"
        shrink="0"
        placeholder=""
        size="large"
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "SearchField")}
      ></SearchField>
      <Image
        width="52px"
        height="45px"
        shrink="0"
        position="relative"
        borderRadius="160px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </Flex>
  );
}
