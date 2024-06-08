import * as React from 'react';
import Box from '../../Box/Box.tsx';
import './Profile.css';

interface ProfileProps { 
  name: string;
  img?: string;
  alt?: string;
}

const Profile: React.FC<ProfileProps> = ({ name = 'user', img = '', alt = '' }) => {
  return (
    <Box bRad="70%">
      <div className="profile" >
        <div>
          <img src={img} alt={alt} className="profile-img" />
        </div>
        <div>
          <h5 className="profile-h5">{name}</h5>
        </div>
      </div>
    </Box>
  );
};

export default Profile;