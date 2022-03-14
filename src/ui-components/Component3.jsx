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
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Component3(props) {
  const {
    Agent,
    Timestamp = "'March 3, 2022, 05:39:09 pm'",
    Duration = "1:34:34",
    AudioRecordings,
    overrides,
    ...rest
  } = props;
  const playbuttonOneOnClick = useNavigateAction({
    type: "url",
    url: AudioRecordings?.filePath,
  });
  const playbuttonThreeOnClick = useNavigateAction({
    type: "url",
    url: AudioRecordings?.description,
  });
  return (
    <View
      width="1224px"
      height="1043px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Component3")}
    >
      <Flex {...getOverrideProps(overrides, "Pagination")}></Flex>
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.25px"
        position="absolute"
        top="15.21%"
        bottom="81.8%"
        left="40.85%"
        right="40.93%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Recordings"
        {...getOverrideProps(overrides, "Recordings")}
      ></Text>
      <View
        position="absolute"
        top="24.31%"
        bottom="67.21%"
        left="6.86%"
        right="7.03%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 4")}
      ></View>
      <Flex {...getOverrideProps(overrides, "SelectField")}></Flex>
      <View
        position="absolute"
        top="34.66%"
        bottom="8.6%"
        left="6.86%"
        right="7.03%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 5")}
      ></View>
      <Flex {...getOverrideProps(overrides, "SearchField")}></Flex>
      <Icon
        width="1054px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1054, height: 0 }}
        paths={[
          {
            d: "M0 0L1054 0L1054 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="43.02%"
        bottom="56.98%"
        left="6.86%"
        right="7.03%"
        {...getOverrideProps(overrides, "Line 3")}
      ></Icon>
      <Icon
        width="1054px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1054, height: 0 }}
        paths={[
          {
            d: "M0 0L1054 0L1054 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="51.12%"
        bottom="48.88%"
        left="6.86%"
        right="7.03%"
        {...getOverrideProps(overrides, "Line 4")}
      ></Icon>
      <Icon
        width="1054px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1054, height: 0 }}
        paths={[
          {
            d: "M0 0L1054 0L1054 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="59.23%"
        bottom="40.77%"
        left="6.86%"
        right="7.03%"
        {...getOverrideProps(overrides, "Line 5")}
      ></Icon>
      <Icon
        width="1054px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1054, height: 0 }}
        paths={[
          {
            d: "M0 0L1054 0L1054 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="67.33%"
        bottom="32.67%"
        left="6.86%"
        right="7.03%"
        {...getOverrideProps(overrides, "Line 6")}
      ></Icon>
      <View
        position="absolute"
        top="35.04%"
        bottom="56.86%"
        left="6.86%"
        right="7.03%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(4,125,149,1)"
        {...getOverrideProps(overrides, "Rectangle 6")}
      ></View>
      <Icon
        width="1054px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1054, height: 0 }}
        paths={[
          {
            d: "M0 0L1054 0L1054 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="75.44%"
        bottom="24.56%"
        left="6.86%"
        right="7.03%"
        {...getOverrideProps(overrides, "Line 7")}
      ></Icon>
      <Icon
        width="1054px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1054, height: 0 }}
        paths={[
          {
            d: "M0 0L1054 0L1054 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="83.54%"
        bottom="16.46%"
        left="6.86%"
        right="7.03%"
        {...getOverrideProps(overrides, "Line 8")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="37.53%"
        bottom="59.48%"
        left="10.78%"
        right="81.7%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="File Name"
        {...getOverrideProps(overrides, "File Name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="37.53%"
        bottom="59.48%"
        left="34.07%"
        right="50%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Initiation Timestamp"
        {...getOverrideProps(overrides, "Initiation Timestamp")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="37.53%"
        bottom="59.48%"
        left="23.86%"
        right="71.49%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Agent"
        {...getOverrideProps(overrides, "Agent")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="45.51%"
        bottom="51.5%"
        left="24.67%"
        right="72.39%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={AudioRecordings?.title}
        {...getOverrideProps(overrides, "Bob")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="53.49%"
        bottom="43.52%"
        left="32.68%"
        right="47.79%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Mar 3, 2022, 05:39:09 pm"
        {...getOverrideProps(overrides, "Mar 3, 2022, 05:39:09 pmcup")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="61.72%"
        bottom="35.29%"
        left="32.68%"
        right="47.79%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Mar 3, 2022, 05:39:09 pm"
        {...getOverrideProps(overrides, "Mar 3, 2022, 05:39:09 pmmps")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="69.83%"
        bottom="27.18%"
        left="32.68%"
        right="47.79%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Mar 3, 2022, 05:39:09 pm"
        {...getOverrideProps(overrides, "Mar 3, 2022, 05:39:09 pmsbr")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="77.93%"
        bottom="19.08%"
        left="32.68%"
        right="47.79%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Mar 3, 2022, 05:39:09 pm"
        {...getOverrideProps(overrides, "Mar 3, 2022, 05:39:09 pmcdu")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="85.91%"
        bottom="11.1%"
        left="32.68%"
        right="47.79%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Mar 3, 2022, 05:39:09 pm"
        {...getOverrideProps(overrides, "Mar 3, 2022, 05:39:09 pmbjw")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="45.51%"
        bottom="51.5%"
        left="32.68%"
        right="47.79%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Mar 3, 2022, 05:39:09 pm"
        {...getOverrideProps(overrides, "Mar 3, 2022, 05:39:09 pmnne")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="53.49%"
        bottom="43.52%"
        left="24.1%"
        right="71.73%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Dylan"
        {...getOverrideProps(overrides, "Dylan")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="61.6%"
        bottom="35.41%"
        left="24.26%"
        right="72.14%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Jane"
        {...getOverrideProps(overrides, "Jane")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="70.2%"
        bottom="26.81%"
        left="24.26%"
        right="72.14%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="John"
        {...getOverrideProps(overrides, "John")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="77.93%"
        bottom="19.08%"
        left="24.67%"
        right="72.39%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Don"
        {...getOverrideProps(overrides, "Don")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="85.91%"
        bottom="11.1%"
        left="23.53%"
        right="70.51%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Severus"
        {...getOverrideProps(overrides, "Severus")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="45.51%"
        bottom="51.5%"
        left="55.88%"
        right="37.5%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="01:34:45"
        {...getOverrideProps(overrides, "01:34:45")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="53.49%"
        bottom="43.52%"
        left="55.56%"
        right="37.83%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="00:29:57"
        {...getOverrideProps(overrides, "00:29:57")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="61.22%"
        bottom="35.79%"
        left="55.72%"
        right="37.99%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="01:04:01"
        {...getOverrideProps(overrides, "01:04:01")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="69.83%"
        bottom="27.18%"
        left="55.47%"
        right="37.75%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="00:38:40"
        {...getOverrideProps(overrides, "00:38:40")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="77.93%"
        bottom="19.08%"
        left="55.8%"
        right="37.75%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="01:25:05"
        {...getOverrideProps(overrides, "01:25:05")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="85.91%"
        bottom="11.1%"
        left="55.72%"
        right="37.83%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="02:54:15"
        {...getOverrideProps(overrides, "02:54:15")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="37.53%"
        bottom="59.48%"
        left="55.56%"
        right="37.83%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Duration"
        {...getOverrideProps(overrides, "Duration")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="37.53%"
        bottom="59.48%"
        left="81.13%"
        right="10.87%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Transcript"
        {...getOverrideProps(overrides, "Transcript")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.57px"
        position="absolute"
        top="37.53%"
        bottom="59.48%"
        left="67.73%"
        right="24.43%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Recording"
        {...getOverrideProps(overrides, "Recording")}
      ></Text>
      <Icon
        width="0px"
        height="83.23193359375px"
        viewBox={{ minX: 0, minY: 0, width: 0, height: 83.23193359375 }}
        paths={[
          {
            d: "M0 0L83.2319 0L83.2319 -1L0 -1L0 0Z",
            stroke: "rgba(255,255,255,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="35.16%"
        bottom="64.84%"
        left="20.92%"
        right="72.28%"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 9")}
      ></Icon>
      <Icon
        width="0px"
        height="507.194580078125px"
        viewBox={{ minX: 0, minY: 0, width: 0, height: 507.194580078125 }}
        paths={[
          {
            d: "M0 0L507.194 0L507.194 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="43.14%"
        bottom="56.86%"
        left="20.92%"
        right="37.65%"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 14")}
      ></Icon>
      <Icon
        width="0px"
        height="507.194580078125px"
        viewBox={{ minX: 0, minY: 0, width: 0, height: 507.194580078125 }}
        paths={[
          {
            d: "M0 0L507.194 0L507.194 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="43.14%"
        bottom="56.86%"
        left="31.78%"
        right="26.78%"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 15")}
      ></Icon>
      <Icon
        width="0px"
        height="507.194580078125px"
        viewBox={{ minX: 0, minY: 0, width: 0, height: 507.194580078125 }}
        paths={[
          {
            d: "M0 0L507.194 0L507.194 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="43.14%"
        bottom="56.86%"
        left="52.78%"
        right="5.78%"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 16")}
      ></Icon>
      <Icon
        width="0px"
        height="507.194580078125px"
        viewBox={{ minX: 0, minY: 0, width: 0, height: 507.194580078125 }}
        paths={[
          {
            d: "M0 0L507.194 0L507.194 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="43.14%"
        bottom="56.86%"
        left="64.95%"
        right="-6.39%"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 17")}
      ></Icon>
      <Icon
        width="0px"
        height="507.194580078125px"
        viewBox={{ minX: 0, minY: 0, width: 0, height: 507.194580078125 }}
        paths={[
          {
            d: "M0 0L507.195 0L507.195 -1L0 -1L0 0Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="43.27%"
        bottom="56.73%"
        left="78.43%"
        right="-19.87%"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 18")}
      ></Icon>
      <Icon
        width="0px"
        height="83.23193359375px"
        viewBox={{ minX: 0, minY: 0, width: 0, height: 83.23193359375 }}
        paths={[
          {
            d: "M0 0L83.2319 0L83.2319 -1L0 -1L0 0Z",
            stroke: "rgba(255,255,255,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="35.16%"
        bottom="64.84%"
        left="31.78%"
        right="61.42%"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 10")}
      ></Icon>
      <Icon
        width="0px"
        height="83.23193359375px"
        viewBox={{ minX: 0, minY: 0, width: 0, height: 83.23193359375 }}
        paths={[
          {
            d: "M0 0L83.2319 0L83.2319 -1L0 -1L0 0Z",
            stroke: "rgba(255,255,255,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="35.16%"
        bottom="64.84%"
        left="52.78%"
        right="40.42%"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 11")}
      ></Icon>
      <Icon
        width="0px"
        height="83.23193359375px"
        viewBox={{ minX: 0, minY: 0, width: 0, height: 83.23193359375 }}
        paths={[
          {
            d: "M0 0L83.2319 0L83.2319 -1L0 -1L0 0Z",
            stroke: "rgba(255,255,255,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="35%"
        bottom="65%"
        left="89.13%"
        right="4.07%"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 12")}
      ></Icon>
      <Icon
        width="0px"
        height="83.23193359375px"
        viewBox={{ minX: 0, minY: 0, width: 0, height: 83.23193359375 }}
        paths={[
          {
            d: "M0 0L83.2319 0L83.2319 -1L0 -1L0 0Z",
            stroke: "rgba(255,255,255,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        position="absolute"
        top="35.04%"
        bottom="64.96%"
        left="78.43%"
        right="14.77%"
        transformOrigin="top left"
        transform="rotate(90deg)"
        {...getOverrideProps(overrides, "Line 13")}
      ></Icon>
      <Image
        position="absolute"
        top="45.89%"
        bottom="51.62%"
        height="2.49%"
        left="69.28%"
        right="29.08%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        src={AudioRecordings?.filePath}
        onClick={() => {
          playbuttonOneOnClick();
        }}
        {...getOverrideProps(overrides, "play-button 1")}
      ></Image>
      <Image
        position="absolute"
        top="45.89%"
        bottom="51.62%"
        height="2.49%"
        left="72.55%"
        right="25.82%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "download 1")}
      ></Image>
      <Image
        position="absolute"
        top="45.89%"
        bottom="51.62%"
        height="2.49%"
        left="87.09%"
        right="11.27%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "download 2")}
      ></Image>
      <Image
        position="absolute"
        top="45.89%"
        bottom="51.62%"
        height="2.49%"
        left="83.5%"
        right="14.87%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "transcript 1")}
      ></Image>
      <Image
        position="absolute"
        top="53.99%"
        bottom="43.52%"
        height="2.49%"
        left="69.28%"
        right="29.08%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        src={AudioRecordings?.filePath}
        {...getOverrideProps(overrides, "play-button 2")}
      ></Image>
      <Image
        position="absolute"
        top="53.99%"
        bottom="43.52%"
        height="2.49%"
        left="72.55%"
        right="25.82%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "download 3")}
      ></Image>
      <Image
        position="absolute"
        top="53.99%"
        bottom="43.52%"
        height="2.49%"
        left="87.09%"
        right="11.27%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "download 4")}
      ></Image>
      <Image
        position="absolute"
        top="53.99%"
        bottom="43.52%"
        height="2.49%"
        left="83.5%"
        right="14.87%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "transcript 2")}
      ></Image>
      <Image
        position="absolute"
        top="61.72%"
        bottom="35.79%"
        height="2.49%"
        left="69.28%"
        right="29.08%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        onClick={() => {
          playbuttonThreeOnClick();
        }}
        {...getOverrideProps(overrides, "play-button 3")}
      ></Image>
      <Image
        position="absolute"
        top="61.72%"
        bottom="35.79%"
        height="2.49%"
        left="72.55%"
        right="25.82%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "download 5")}
      ></Image>
      <Image
        position="absolute"
        top="61.72%"
        bottom="35.79%"
        height="2.49%"
        left="87.09%"
        right="11.27%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "download 6")}
      ></Image>
      <Image
        position="absolute"
        top="61.72%"
        bottom="35.79%"
        height="2.49%"
        left="83.5%"
        right="14.87%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "transcript 3")}
      ></Image>
      <Image
        position="absolute"
        top="70.07%"
        bottom="27.43%"
        height="2.49%"
        left="69.28%"
        right="29.08%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "play-button 4")}
      ></Image>
      <Image
        position="absolute"
        top="70.07%"
        bottom="27.43%"
        height="2.49%"
        left="72.55%"
        right="25.82%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "download 7")}
      ></Image>
      <Image
        position="absolute"
        top="70.07%"
        bottom="27.43%"
        height="2.49%"
        left="87.09%"
        right="11.27%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "download 8")}
      ></Image>
      <Image
        position="absolute"
        top="70.07%"
        bottom="27.43%"
        height="2.49%"
        left="83.5%"
        right="14.87%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "transcript 4")}
      ></Image>
      <Image
        position="absolute"
        top="78.18%"
        bottom="19.33%"
        height="2.49%"
        left="69.28%"
        right="29.08%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "play-button 5")}
      ></Image>
      <Image
        position="absolute"
        top="78.18%"
        bottom="19.33%"
        height="2.49%"
        left="72.55%"
        right="25.82%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "download 9")}
      ></Image>
      <Image
        position="absolute"
        top="78.18%"
        bottom="19.33%"
        height="2.49%"
        left="87.09%"
        right="11.27%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "download 10")}
      ></Image>
      <Image
        position="absolute"
        top="78.18%"
        bottom="19.33%"
        height="2.49%"
        left="83.5%"
        right="14.87%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "transcript 5")}
      ></Image>
      <Image
        position="absolute"
        top="86.03%"
        bottom="11.47%"
        height="2.49%"
        left="69.28%"
        right="29.08%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "play-button 6")}
      ></Image>
      <Image
        position="absolute"
        top="86.03%"
        bottom="11.47%"
        height="2.49%"
        left="72.55%"
        right="25.82%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "download 11")}
      ></Image>
      <Image
        position="absolute"
        top="86.03%"
        bottom="11.47%"
        height="2.49%"
        left="87.09%"
        right="11.27%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "download 12")}
      ></Image>
      <Image
        position="absolute"
        top="86.03%"
        bottom="11.47%"
        height="2.49%"
        left="83.5%"
        right="14.87%"
        width="1.63%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "transcript 6")}
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
        top="4.24%"
        bottom="92.77%"
        left="6.78%"
        right="75.57%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Amazon Connect"
        {...getOverrideProps(overrides, "Amazon Connect")}
      ></Text>
      <View
        position="absolute"
        top="2.99%"
        bottom="91.4%"
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
