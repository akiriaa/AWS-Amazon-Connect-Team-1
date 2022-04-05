import Amplify, { Auth } from 'aws-amplify';
//import * as AWS from 'aws-sdk';
import awsconfig from './aws-exports';
import {useEffect} from 'react';
//import s3Client from './s3Client';

const AWS = require('aws-sdk');


function List() {
 

    
(async function(){

  
    try{ 
  
        AWS.config.setPromisesDependency();
      AWS.config.update({
          accessKeyId : 'AKIATUMPDTV3HDT6RFGA',
          secretAccessKey : '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',
      //    region : 'us-east-1'
  
        })
        
      const s3 = new AWS.S3();
  
      const response = s3.listObjectsV2({
          Bucket: 'amazon-connect-c5138a2c2b4d',
         //Prefix: 'connect/AWSConnect-Team-1/CallRecordings'
      }).promise();
      console.log("response: ", response);
    }
    catch (e) {
        console.log('our error', e)
      }
    })();


    return (
        <div>
            <div className="home-title">                                    
                <h1> Recordings </h1>
            </div> 
            <div>

            </div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Placeholder</td>
                        <td>Playing</td>
                    </tr>
                </thead>
            </table>
                         <h1>response: </h1>
        </div>
    );

}
export default List;