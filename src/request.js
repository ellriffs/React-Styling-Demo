import {useEffect, useState} from 'react';
import axios from 'axios';
import './request.css';

const Request = () => {
  const [image, setImage] = useState([]);
  useEffect(() => {
    axios.get('https://picsum.photos/v2/list?page=2&limit=100').then((res) => {
      console.log(res);
      setImage(res.data);
    });
  }, []);

  return (
    <div
      className="pic-container"
      style={{
        border: '2px solid black',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      {image.map((pic) => {
        return (
          <>
            <img
              className="random-pic"
              style={{
                border: '2px solid black',
                height: '300px',
                width: '300px',
                margin: '20px',
                borderRadius: '50%',
              }}
              src={pic.download_url}
              alt="random"
            ></img>
          </>
        );
      })}
    </div>
  );
};

export default Request;
