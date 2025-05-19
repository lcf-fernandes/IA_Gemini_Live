
// ---------- import Packs
import React from 'react';
import * as SvgObj from 'react-native-svg';
import Svg from 'react-native-svg';

type Tprops = {
  pass: {
    componentSvg: any;
    svgOriginal: any;
    altura: any;
    largura: any;
    preenchimento: string[];
    args: any;
  };
};

// SvgView
export const SvgView1 = (props: Tprops) => {
  // ---------- set Caps Inputs
  const { componentSvg, altura, largura, preenchimento, args } = props.pass;

  const [SttComponent, setComponent] = React.useState(<></>);

  const setNewComp = async () => componentSvg(Svg, SvgObj);

  // ---------- set Arguments and Variables (If Exists)
  const iptFill = preenchimento.reduce(
    (prev: any, curr: any) => prev + curr,
    '',
  );

  const newComp = (Comp: any) => (
    <Comp height={altura} width={largura} fill={iptFill} />
  );

  React.useEffect(() => {
    setNewComp().then(Comp => setComponent(newComp(Comp)));
  }, []);

  return <>{SttComponent}</>;
};
