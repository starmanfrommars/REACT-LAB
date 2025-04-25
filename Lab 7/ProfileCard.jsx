import React, { useState } from 'react'

const ProfileCard = ({name,bio,profilePic}) => {
    const [bgColor, setBgColor] = useState("#F8F9FA");

    const handleMouseEnter = ()=> setBgColor("#D1E7DD")
    const handleMouseLeave = ()=> setBgColor("#F8F9FA")

    return (
        <div>
            <div className="profile-card" style={{backgroundColor: bgColor}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <img src={profilePic} alt={name} className="profile-picture" />
                <p className="profile-name">{name}</p>
                <p className="profile-bio">{bio}</p>
            </div>
        </div>
    )
}

export default ProfileCard
