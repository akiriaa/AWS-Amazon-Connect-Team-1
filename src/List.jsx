import { setFormOrder } from '@aws-amplify/ui';
import Amplify, { Storage } from 'aws-amplify';
import { useEffect, useState , useRef} from 'react';

//import { ListObjectsCommand } from "@aws-sdk/client-s3";




function List() {
    const ref = useRef(null);
    const [files, setFiles] = useState([]);


    useEffect(() => {
    console.log("Configuring...");
    Amplify.configure({
        Auth: {
            identityPoolId: 'us-east-1:e2aff3de-0d7f-435b-b07f-4e15dc60f200',
            region: 'us-east-1'
        
        },

        Storage: {
            AWSS3: {
                bucket: 'amplify-audio-bucket',
                region: 'us-east-1'
            },
        }, 
    })
   console.log("Configured");
}, []);

const handleFileLoad = () => {
    const filename = ref.current.files[0].name;
    console.log(filename);
    Storage.put(filename,ref.current.files[0]).then(resp => {
        console.log(resp);
    }).catch(err => {console.log(err); });
}

const loadAudio = () => {
    Storage.list('').then(files => {
        setFiles(files);
        //console.log("Files", files);
    }).catch(err =>{ console.log(err);});
}


useEffect(() => {
    loadAudio();
}, []);

//     //debugger;
//     useEffect(() => {
//         Amplify.configure({
//             Auth: {
//                 identityPoolId: 'us-east-1:e2aff3de-0d7f-435b-b07f-4e15dc60f200', //REQUIRED - Amazon Cognito Identity Pool ID
//                 region: 'us-east-1', // REQUIRED - Amazon Cognito Region
//             },
//             Storage: {
//                 AWSS3: {
//                     bucket: 'amazon-connect-c5138a2c2b4d', //REQUIRED -  Amazon S3 bucket name
//                     Prefix: 'connect/AWSConnect-Team-1/CallRecordings/',
//                     region: 'us-east-1', //OPTIONAL -  Amazon service region
//                 }
//             }
//         })
//     }, []);
    
//     const listItems = files.map((file) =>
//   <li>{file}</li>
// );

//    const handleFiles = useEffect(() => {
//         //const key = '/connect/AWSConnect-Team-1/CallRecordings/';
//         Storage.list('').then(files => { 
//             setFiles(files);
//             console.log(files);
//         }).catch(err => { 
//             console.log(err)
//         });
//     }, []);

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
                <h2> Agent Screen Recordings </h2>
            </div> 
            {/* <p> {handleFiles} </p>  */}
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Placeholder</td>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td><ul>{listItems}</ul> </td>
                    </tr> */}
                    {files.map((file,i=1) => (
                        <tr key = {file.key} > 
                            <td>{i}</td>
                            <td>{file.key}</td>
                            <td><button onClick={() => handleShow(file.key)}>Play</button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
            <input ref={ref} type="file" onChange={handleFileLoad} />
            </div>
        </main>
    );

}

export default List;




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