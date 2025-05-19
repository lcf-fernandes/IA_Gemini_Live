
// ---------- import Packs
import React, { useState } from 'react';
import {
  FlatList,
  Platform,
  Pressable,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

// ---------- import Local Tools
import { setData } from '../project';
import { fontSize } from '../stls';

const proxy = 'https://us-central1-flaxboll.cloudfunctions.net/proxyCall?url=';
const requestOptions: any = {
  method: 'GET',
  redirect: 'follow',
};

type Tprops_AutocompleteGooglePlaces = {
  pass: { apiKey: string; pathList: string[]; args: any };
};
export const AutocompleteGooglePlaces = (
  props: Tprops_AutocompleteGooglePlaces,
) => {
  // ---------- set Caps Inputs
  const { pass } = props;

  const [sttSugestions, setSugestions] = useState([]);
  const [sttList, setList] = useState(false);
  const [sttTimer, setTimer] = useState();
  const [sttTxt, setTxt] = useState('');

  const getTxt = async (val: string) => {
    setTxt(val);

    if (sttTimer) clearTimeout(sttTimer);
    const fnGroup = async () => {
      await getSugestions({
        ...pass,
        street: val,
        setSugestions,
        setTxt,
      });
    };
    const newTimeID: any = setTimeout(fnGroup, 2000);
    setTimer(newTimeID);
    setList(true);
  };

  const allProps = {
    style: stlsUser,
    onChangeText: getTxt,
    value: sttTxt,
    placeholderTextColor: '#adb5bd',
    placeholder: 'Pesquisar Endereço...',
  };

  const ItemList = (props: any) => {
    const item = props.item;

    const btnSetPrediction = async () => {
      const placeId = item.place_id;
      const description = item.description;

      // ---------- check Data
      if (!placeId) return console.log({ placeId });

      // ---------- set CAL API
      const baseUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=`;
      const key = '&key=' + pass.apiKey;
      const detailsUrl = proxy + baseUrl + placeId + key;

      const response = await fetch(detailsUrl, requestOptions).catch(err =>
        console.log('AutoComplete Places', { err }),
      );
      const objRes = response && (await response.json());

      // ---------- check Data
      if (!objRes) return console.log({ objRes });

      const allDataResult = objRes?.result;
      const pathResult = pass.pathList.join();

      // ---------- update CtData
      setData({ path: pathResult, value: allDataResult });
      setTxt(description);
      setList(false);
      console.log({ pathResult, currLocation: allDataResult });
    };

    return (
      <Pressable style={stlItemList} onPress={btnSetPrediction}>
        <Text>{item.description}</Text>
      </Pressable>
    );
  };

  const btnClose = () => {
    setSugestions([]);
    setList(false);
    setTimer(undefined);
    setTxt('');
  };
  return (
    <>
      <View style={stlFillWidth}>
        <TextInput {...allProps} />
        <Pressable style={stlClose} onPress={btnClose}>
          <Text style={stlTxtClose}>{'X'}</Text>
        </Pressable>
      </View>
      {sttList ? (
        <View style={stlFillWidth}>
          <FlatList data={sttSugestions} renderItem={ItemList} />
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

const getSugestions = async (pass: any) => {
  const input = '?input=' + pass.street;
  const key = '&key=' + pass.apiKey;
  const baseUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/';
  const URL = proxy + baseUrl + 'json' + input + key;

  const response = await fetch(URL, requestOptions).catch(err =>
    console.log('AutoComplete Places', { err }),
  );

  if (!response) return console.log({ response });
  const objRes = await response?.json();

  pass.setSugestions(objRes?.predictions ?? []);
};

// ---------- set Styles
const stlItemList: ViewStyle = {
  padding: 5,
  borderBottomColor: '#ddd',
  borderBottomWidth: 1,
};
const stlAllCenter: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
};
const stlClose: ViewStyle = {
  ...stlAllCenter,
  width: 22,
  height: 22,
  borderRadius: 3,
  position: 'absolute',
  top: 2,
  right: 4,
};
const stlTxtClose: TextStyle = {
  lineHeight: 1,
  color: 'black',
  fontSize: 12,
};
const stlFillWidth: ViewStyle = { width: '100%' };
const stlsUser: any = {
  width: '100%',
  // borderBottomColor: '#ccc',
  borderBottomWidth: 1,
  paddingVertical: 4,
  paddingHorizontal: 4,
  fontSize: 12,
};
if (Platform.OS === 'web') stlsUser.outline = 'none';

