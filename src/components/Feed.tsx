import React from 'react';
import { auth } from '../firebase';
const Feed = () => {
  const logout = async () => {
    await auth
      .signOut()
      .then(function () {
        console.log('sign out');
      })
      .catch(function (error) {
        alert(error.message);
      });
  };
  return (
    <div>
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Feed;
