import { S3Client } from "@aws-sdk/client-s3";
//import * as AWS from 'aws-sdk';


// Set the AWS Region.
const REGION = "REGION"; //e.g. "us-east-1"
// Create an Amazon S3 service client object.
const accessKeyId = 'AKIATUMPDTV3HDT6RFGA';
const secretAccessKey = 'Fri2lWkcgNo9S8bK4uaQH5PCfeyJPBGHQyQFBpT1';

const s3Client = new S3Client({region: REGION });
s3Client.config({
    accessKeyId : accessKeyId,
    secretAccessKey : secretAccessKey
});
export default { s3Client };

