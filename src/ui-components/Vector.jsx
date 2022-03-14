/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Vector(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="1224px"
      height="831px"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 1224, height: 831 }}
      paths={[
        {
          d: "M1224 0L0 0L0 831L1224 831L1224 0Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...rest}
      {...getOverrideProps(overrides, "Vector")}
    ></Icon>
  );
}
