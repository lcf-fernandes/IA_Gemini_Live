
// ---------- import Packs
import React from 'react';
import * as RN from 'react-native';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { waitForUserData } from './actions/waitForUserData';

// ---------- import Local Tools
import { getCtData, getStlValues } from '../../project';

export const LoginWithGoogle = (...args: any) => {
  console.log('LOGIN WITH GOOGLE INIT');

  // -----------------------------
  // --------- Login WEB (Browser)
  // -----------------------------
  const btn = async () => {
    const fbInit = getCtData('all.fireInit');
    const auth = getAuth(fbInit);

    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const userLogin = {
      userData: {
        email: user.email,
        name: user.displayName,
        image: user.photoURL,
      },
    };

    waitForUserData(userLogin);
  };

  // ---------- set Caps Inputs
  const arrStyles = [
    { backgroundColor: getCtData('all.colors.deepPurple') },
    { alignItems: 'center' },
    { justifyContent: 'center' },
    { borderRadius: 20 },
    { paddingHorizontal: 32 },
    { paddingVertical: 8 },
  ];

  // ---------- set Styles
  const stl = getStlValues(arrStyles);

  const allProps = {
    style: [stl],
    onPress: btn,
  };

  // ---------- set Render
  return (
    <RN.Pressable {...allProps}>
      <RN.Text style={{ color: 'white' }}>Google</RN.Text>
    </RN.Pressable>
  );
};

