import React from 'react'
import { BsJustify } from 'react-icons/bs'
import { ThreeDots } from 'react-loader-spinner'

const Loading = () => {
  return (
    <ThreeDots
    visible={true}
    height="90vh"
    width="80"
    color="#40bfff"
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{display:"flex", justifyContent:"center"}}
    wrapperClass=""
    />
  )
}

export default Loading