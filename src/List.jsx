import { ConsoleLogger } from '@aws-amplify/core';
import Amplify, { Auth, Storage } from 'aws-amplify';
import {useEffect, useState} from 'react';

// Auth.configure(awsconfig)


// Amplify.configure({
//     Auth: {
//         identityPoolId: 'us-east-1:71506b7d-6b6b-4cbf-9cbf-3d058f6399f6', //REQUIRED - Amazon Cognito Identity Pool ID
//         region: 'us-east-1', // REQUIRED - Amazon Cognito Region
//     },
//     Storage: {
//         AWSS3: {
//             bucket: 'amazon-connect-c5138a2c2b4d', //REQUIRED -  Amazon S3 bucket name
//             region: 'us-east-1', //OPTIONAL -  Amazon service region
//         }
//     }
// })

function List() {
    const [files, setFiles] = useState([])

    useEffect(() => {
        Amplify.configure({
            Auth: {
                identityPoolId: 'us-east-1:71506b7d-6b6b-4cbf-9cbf-3d058f6399f6', //REQUIRED - Amazon Cognito Identity Pool ID
                region: 'us-east-1', // REQUIRED - Amazon Cognito Region
            },
            Storage: {
                AWSS3: {
                    bucket: 'amazon-connect-c5138a2c2b4d', //REQUIRED -  Amazon S3 bucket name
                    region: 'us-east-1', //OPTIONAL -  Amazon service region
                }
            }
        })
    }, []);

    useEffect(() => {
        Storage.list('').then(files => { 
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
                    </tr>
                </thead>
                <tbody>
                    {files.map(file => (
                        <tr>
                            <td>{file.key}</td>
                            <td><button onClick={() => handleShow(file.key)}>Play</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );

}

export default List




// import awsconfig from './aws-exports';
// //Amplify.configure(awsconfig);


// Amplify.configure({
//     Auth: {
//         identityPoolId: 'us-east-1:71506b7d-6b6b-4cbf-9cbf-3d058f6399f6', //REQUIRED - Amazon Cognito Identity Pool ID
//         region: 'us-east-1', // REQUIRED - Amazon Cognito Region
//         //userPoolId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito User Pool ID
//         //userPoolWebClientId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito Web Client ID
//     },
//     Storage: {
//         AWSS3: {
//             bucket: 'amazon-connect-c5138a2c2b4d', //REQUIRED -  Amazon S3 bucket name
//             region: 'us-east-1', //OPTIONAL -  Amazon service region
//         }
//     }
// });

// Storage.list('') // for listing ALL files without prefix, pass '' instead
//     .then(result => console.log(result))
//     .catch(err => console.log(err));


// function List(results) {
//     const filesystem = {}
//     const add = (source, target, item) => {
//       const elements = source.split("/");
//       const element = elements.shift();
//       if (!element) return // blank
//       target[element] = target[element] || {__data: item}// element;
//       if (elements.length) {
//         target[element] = typeof target[element] === "object" ? target[element] : {};
//         add(elements.join("/"), target[element], item);
//       }
//     };
//     results.forEach(item => add(item.key, filesystem, item));
//     return filesystem
// }

// export default List;