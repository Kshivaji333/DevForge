import makePostRequest from "@/functions/postTest";
import React from 'react'

const TestPost = async () => {
  const {data:dataFromPost} = await makePostRequest();
  return (
    <div>
        <p>{dataFromPost?.message}</p>
    </div>
  )
}

export default TestPost
