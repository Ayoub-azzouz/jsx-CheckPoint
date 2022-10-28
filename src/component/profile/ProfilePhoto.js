import React from 'react'
import img from "../../image/monkey.jpg"
const ProfilePhoto = () => {
  return (
    <div>
        <img style={{width:"400px",height:"300px"}} src={img} alt="profile" />
    </div>
  )
}

export default ProfilePhoto