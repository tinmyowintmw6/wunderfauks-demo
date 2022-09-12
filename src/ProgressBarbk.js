import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import React, { useState } from 'react'
import Circle from './Circle';

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  React.useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
         // console.log(json);
          setData(json);
          setDone(true);
        });
    }, 9300);

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Circle />
      {

        !done ? (
          <Box sx={{ width: '100%' }}>
            <LinearProgress className="progress" variant="determinate" value={progress} />
          </Box>
        ) : (
          
          <div className="container">
            <div className="scroller">
              <div className="inner">
                <span>hi,</span>
                <span>creative agency</span>
                <span>since 2010</span>
                <span>through our belief</span>
              </div>
            </div>
          </div>
        )

      }
    </>
  );
}