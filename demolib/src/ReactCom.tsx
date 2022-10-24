import React, { useEffect } from 'react';

export default function ReactCom() {

  useEffect(() => {
    console.log('ReactCom Logged');
  }, []);

  return (
    <div> ReactCom </div>
  );
}
