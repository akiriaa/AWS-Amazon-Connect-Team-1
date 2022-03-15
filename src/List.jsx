import { ConsoleLogger } from '@aws-amplify/core';
import Amplify, { Auth, Storage} from 'aws-amplify';
import {useEffect, useState} from 'react';
import { useRef } from 'react'; 
import App from './App';


function List() {
    const [files, setFiles] = useState([]);
    const[ ref] = useRef(null);

    // // Set the region where your identity pool exists (us-east-1, eu-west-1)
    // Amplify.config.region = 'us-east-2';

    // // Configure the credentials provider to use your identity pool
    // Amplify.config.credentials = new Amplify.CognitoIdentityCredentials({
    //     IdentityPoolId: 'IDENTITY_POOL_ID',
    // });

    // // Make the call to obtain credentials
    // Amplify.config.credentials.get(function(){

    //     // Credentials will be available when this function is called.
    //     var accessKeyId = Amplify.config.credentials.accessKeyId;
    //     var secretAccessKey = Amplify.config.credentials.secretAccessKey;
    //     var sessionToken = Amplify.config.credentials.sessionToken;

    // });


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
        console.log(files.length)
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
            {/* <Nav /> */}
            <div className="home-title">
                <h1> Recordings </h1>
            </div> 
            <p>{files.length}</p>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Placeholder</td>
                        <td>Playing</td>
                    </tr>
                </thead>
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