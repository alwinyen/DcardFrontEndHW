import React from 'react';
import Alert from 'react-bootstrap/Alert'

const HasMoreBox = ({hasMore, error:e}) => {
  console.log(hasMore, e)
  return (
    hasMore ? <></> : 
      !e.error ?
      <Alert variant="success">
        <Alert.Heading>已經沒有了喔!</Alert.Heading>
        <p>
          可以選擇其他縣市繼續查看喔!
        </p>
      </Alert> : <></>
  )
}

export default HasMoreBox