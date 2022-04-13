import React, { FC } from 'react';

import {
  AudioInputControl,
  AudioOutputControl,
  ControlBar,
  ControlBarButton,
  Phone,
  useMeetingManager,
  MeetingStatus,
  useMeetingStatus,
  VideoInputControl,
  VideoTileGrid,
  ContentShareControl
} from 'amazon-chime-sdk-component-library-react';
import { endMeeting } from '../utils/api';

const Meeting: FC = () => {
  const meetingManager = useMeetingManager();
  const meetingStatus = useMeetingStatus();

  const clickedEndMeeting = async () => {
    const meetingId = meetingManager.meetingId;
    if (meetingId) {
      await endMeeting(meetingId);
      await meetingManager.leave();
    }
  }
  
  //https://aws.github.io/amazon-chime-sdk-component-library-react/?path=/docs/sdk-components-meetingcontrols-contentsharecontrol--page
  return (
      <div style={{marginTop: '2rem', height: '40rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <VideoTileGrid/>
        {meetingStatus === MeetingStatus.Succeeded ? 
          <ControlBar
            layout="undocked-horizontal"
            showLabels
          >
            <AudioInputControl />
            <VideoInputControl />
            <AudioOutputControl />
            <ContentShareControl />
            <ControlBarButton icon={<Phone />} onClick={clickedEndMeeting} label="End" />
          </ControlBar> 
          :
          <div/>
        }
      </div>
  );
};

export default Meeting;
