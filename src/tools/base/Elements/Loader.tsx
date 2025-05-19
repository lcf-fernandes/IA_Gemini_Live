
// ---------- import Packs
import React from 'react';
import { ActivityIndicator } from 'react-native';

type Tprops = {
  pass: { size: 'small' | 'large'; color: string; args: any };
};

// Loader - ccc_loader
export const Loader = (props: Tprops) => {
  // ---------- set Props
  const { size, color, args } = props.pass;

  const allProps = { size, color };

  // ---------- set Render
  return <ActivityIndicator {...allProps} />;
};

