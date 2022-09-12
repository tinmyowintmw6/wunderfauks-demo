import React, { useEffect, useState } from 'react'
import ReactLoading from 'react-loading';

const Loading1 = () => {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) =>{ 
            console.log(json);
            setData(json);
            setDone(true);
        });
    }, 18000);


  })
  return (
    <>
      {
        !done ? (
          <ReactLoading
            type={"balls"}
            color={"#fff"}
            height={'20%'} 
            width={'5%'}
            className={'line'}
            fontSize={'10px'}
          />
        ) : (
          <ul>
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        )
      }
    </>
  );
}

export default Loading1;