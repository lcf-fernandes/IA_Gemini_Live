
import React, { useEffect, useState } from 'react';
import { Platform, Text, View } from 'react-native';
import * as Location from 'expo-location';

import { mapElements, setData } from '../../project';
import { useData } from '../../..';

type Tprops = {
  pass: {
    ipt1: any[];
    ipt2: string;
    ipt3: any[];
    args: any;
  };
};

export const GetUserLocation = (props: Tprops) => {
  // const isWeb = Platform.OS === 'web';
  const { ipt1, args } = props.pass;
  const currInitGetUserLoc = useData(ct => ct.sc.B3A.currData.currUserLocation);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar a localização foi negada');
        return;
      }

      if (!currInitGetUserLoc) {
        let location = await Location.getCurrentPositionAsync({});

        // setLocation(location);
        setData({ path: 'sc.B3A.currData.currUserLocation', value: location });
        setData({ path: 'sc.B5.currData.initialPoint', value: location });
      }
    })();
  }, [currInitGetUserLoc]);

  const children = mapElements(ipt1, args);

  // -------------- ----------------------
  // -------------- ----------------------
  // -------------- Check If Coords Exists
  // -------------- ----------------------
  // -------------- ----------------------
  const checkLat = currInitGetUserLoc?.coords?.latitude;
  const checkLong = currInitGetUserLoc?.coords?.longitude;
  const checkCoords = checkLat && checkLong;

  if (checkCoords) {
    console.log('TEM localização', { currInitGetUserLoc });
    return <>{children}</>;
  }

  if (!checkCoords) {
    console.log('nao tem localização', { currInitGetUserLoc });
    return (
      <>
        {children}
        <View
          style={{
            width: '100%',
            height: 40,
            backgroundColor: 'black',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.8,
            top: 0,
            left: 0,
          }}
        >
          <Text style={{ color: '#ccc' }}>
            Carregando Localização... {errorMsg && errorMsg}
          </Text>
        </View>
      </>
    );
  }
};

