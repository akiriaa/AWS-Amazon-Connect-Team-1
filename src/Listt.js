import AWS from 'aws-sdk';
import { useState, useEffect } from 'react';

AWS.config.update({region: 'us-east-2'});

const s3 = new AWS.S3();

var params = {
  Bucket : 'amazon-connect-c5138a2c2b4d',
  
};

s3.listObjectsV2(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
}).promise();





// AWS.config.update({
//   accessKeyId: process.env.REACT_APP_ACCESS_ID,
//   secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
//   region: process.env.REACT_APP_REGION,
// });
// const s3 = new AWS.S3();

// const params = {
//   Bucket: 'amazon-connect-c5138a2c2b4d',
//   Delimiter: '',
//   Prefix: 'connect/',
// };

const List = () => {
  const [listFiles, setListFiles] = useState([]);

  useEffect(() => {
    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        setListFiles(data.Contents);
        console.log(data.Contents);
        console.log(listFiles);
      }
    });
  }, []);

  return (
    <div className='card'>
      <div className='general-title'>Recordings</div>
      <ul className='list-group'>
        {listFiles &&
          listFiles.map((name, index) => (
            <li className='list-group-item' key={index}>
              {name.Key}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;