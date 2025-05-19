
// ---------- import Packs
import { TextStyle, ViewStyle } from 'react-native';

type Tprops = {
  [key: string]: ViewStyle | TextStyle;
};

const common: Tprops = {
  allCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export const stls: Tprops = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftColor: '#ddd',
    paddingHorizontal: 5,
    borderLeftWidth: 2,
    marginLeft: 6,
  },
  btn1: {
    ...common.allCenter,

    width: 26,
    height: 26,
  },
  txt1: {
    fontSize: 16,
    lineHeight: 0,
    marginTop: -2,
    fontWeight: 'bold',
    color: '#BBB',
  },
};

