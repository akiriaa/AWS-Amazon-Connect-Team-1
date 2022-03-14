/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Audio } from "../models";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type Component3Props = React.PropsWithChildren<Partial<ViewProps> & {
    Agent?: String;
    Timestamp?: String;
    Duration?: String;
    AudioRecordings?: Audio;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Component3(props: Component3Props): React.ReactElement;
