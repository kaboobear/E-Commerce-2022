import React, { FC, useEffect } from 'react';

export const Profile: FC = () => {
  useEffect(() => {
    console.log('Fuck');
  }, []);

  return <div>Profile</div>;
};
