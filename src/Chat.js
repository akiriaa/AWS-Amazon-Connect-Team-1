import React from 'react';
import Nav from './Nav';

import { useState } from 'react';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";
import ScriptTag from 'react-script-tag';

const Chat = () => {
  return(
    <div className="cpp">
      <scriptTag type="text/javascript" src='./Widget.js'/>

    </div>
  );
};

export default Chat
