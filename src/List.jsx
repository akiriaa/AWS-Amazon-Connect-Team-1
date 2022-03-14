import { ConsoleLogger } from '@aws-amplify/core';
import Amplify, { Auth, Storage} from 'aws-amplify';
import {useEffect, useState} from 'react';
import { useRef } from 'react/cjs/react.production.min'; 
import Nav from "./Nav"


function List() {
    const [files, setFiles] = useState([]);
    const [ref] = useRef(null);


    // Create a service client with the provider
    // var dynamodb = new AWS.DynamoDB({region: 'us-west-2'});
 // Initialize the Amazon Cognito credentials provider
    // CognitoCachingCredentialsProvider credentialsProvider = new CognitoCachingCredentialsProvider(
    //     getApplicationContext(),
    //     "us-east-1:791e45ec-edb9-4a37-a029-c03efb312b33", // Identity pool ID
    //     Regions.US_EAST_1 // Region
    //     );

    useEffect(() => {
        Amplify.configure({
            Auth: {
                identityPoolId: 'us-east-1:e2aff3de-0d7f-435b-b07f-4e15dc60f200', //REQUIRED - Amazon Cognito Identity Pool ID
                region: 'us-east-1', // REQUIRED - Amazon Cognito Region
            },
            Storage: {
                AWSS3: {
                    bucket: 'awsamazonconnectteambucket151602-staging', //REQUIRED -  Amazon S3 bucket name
                  //  region: 'us-east-2', //OPTIONAL -  Amazon service region
                }
            }
            

        })
    }, []);
    // const handleUserCredentials = () => {
    //     var params = {
    //         IdentityId: 'STRING_VALUE', /* required */
    //         CustomRoleArn: 'STRING_VALUE',
    //         Logins: {
    //           '<IdentityProviderName>': 'STRING_VALUE',
    //           /* '<IdentityProviderName>': ... */
    //         }
    //       };
        // cognitoidentity.getCredentialsForIdentity(params, function(err, data) {
        // if (err) console.log(err, err.stack); // an error occurred
        // else     console.log(data);           // successful response
        // });}
        // Amplify.config.region = 'us-east-1';

        // // Configure the credentials provider to use your identity pool
        // Amplify.config.credentials = new Amplify.CognitoIdentityCredentials({
        //     IdentityPoolId: 'IDENTITY_POOL_ID',
        // });
        
        // Amplify.config.credentials.get(function(){

        //     // Credentials will be available when this function is called.
        //     var accessKeyId = Amplify.config.credentials.accessKeyId;
        //     var secretAccessKey = Amplify.config.credentials.secretAccessKey;
        //     var sessionToken = Amplify.config.credentials.sessionToken;
        //     var identityId = Amplify.config.credentials.identityId;

        
     //   });



    // useEffect(() => {
    //     Amplify.configure({
    //         Auth: {
    //             identityPoolId: 'us-east-1:e2aff3de-0d7f-435b-b07f-4e15dc60f200', //REQUIRED - Amazon Cognito Identity Pool ID
    //             region: 'us-east-1', // REQUIRED - Amazon Cognito Region
    //         },
    //         Storage: {
    //             AWSS3: {
    //                 bucket: 'awsamazonconnectteambucket151602-staging', //REQUIRED -  Amazon S3 bucket name
    //               //  region: 'us-east-2', //OPTIONAL -  Amazon service region
    //             }
    //         }
            

    //     })
    // }, []);



    // const loadFiles = () => {
    //     Storage.list('')
    //         .then(files => { 
    //         setFiles(files);
    //     }).catch(err => { 
    //         console.log(err)
    //     });
    // }

    useEffect(() => {
        Storage.list('')
            .then(files => { 
            setFiles(files);
        }).catch(err => { 
            console.log(err)
        });
    }, []);

    const handleShow = (file) => {
        Storage.get(file).then(resp => {
          console.log(resp);
          setFiles(resp)
        }).catch(err => { console.log(err); });
      }
    
    const handleFileLoad = () => {}
        const filename = ref.current.files[0].name;
        Storage.put(filename,ref.current.files[0].then(resp => {
            console.log(resp);
            //loadFiles;
        }).catch(err => {console.log(err);})
        )
        


    return (
        <main className="body-content">
            <Nav />
            <div className="home-title">
                <h1> Recordings </h1>
            </div> 
            <p>{files.length}</p>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Placeholder</td>
                    </tr>
                </thead>
                <div>
                    <input ref = {ref} type="file" onChange={handleFileLoad}/>
                </div>
                <tbody> 
                    {
                    files.map((file,i) => (
                        <tr key={file.key}>
                            <td> {i}</td>
                            <td>{file.key}</td>
                            <td><button onClick={() => handleShow(file.key)}>Play</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );

};                  

export default List;