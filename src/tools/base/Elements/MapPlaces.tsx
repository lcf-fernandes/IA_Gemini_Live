
// ---------- import Packs
import React from 'react';

type Tprops = {
  pass: {
    googlePlacesKey: string;
    args: any;
  };
};

// MapView
export const MapPlaces = (props: Tprops) => {
  // ---------- set Props
  const { googlePlacesKey, args } = props.pass;
  console.log({ googlePlacesKey });

  // ---------- set Render
  return <></>;
};

