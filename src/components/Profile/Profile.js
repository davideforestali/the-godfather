import React from 'react';
import './Profile.scss';
import profilePic from './../../assets/img/profile-pics/Vito-Corleone.jpg';

const Profile = (props) => {

  return (
    <div className="profile">
      <div className="grid">
        <div className="grid__col-lg-3 grid__col-xl-2">
          <div className="profile-pic">
            <img src={profilePic} className="profile-pic__image" alt="lorem ipsum" />
          </div>
        </div>
        <div className="grid__col-lg-9 grid__col-xl-8">
          <h1 className="h1">{props.profileToShow.name}</h1>
          <div className="box">
            <h2 className="h5">Biography</h2>
            <p>{props.profileToShow.biography}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;