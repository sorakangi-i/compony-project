import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const IconTest = () => {
  return (
    <div className="flex gap-4 p-4 items-center justify-center bg-gray-100 rounded-lg m-4">
      <HomeIcon fontSize="large" className="text-blue-500" />
      <StarIcon fontSize="large" color="primary" />
      <SettingsIcon fontSize="large" color="secondary" />
      <FavoriteIcon fontSize="large" style={{ color: 'red' }} />
      <p className="font-bold">Material Icons 테스트</p>
    </div>
  );
};

export default IconTest;
