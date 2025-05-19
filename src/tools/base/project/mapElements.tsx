
// ---------- import Packs
import React from 'react';

type Tlist = ((args?: any) => JSX.Element)[];

export const mapElements = (list: Tlist, args?: any) => {
  const condCall = list.flatMap(i => i).length > 0;
  const renderList = () =>
    list.map((Item, idx) => (
      <React.Fragment key={idx}>{Item(args)}</React.Fragment>
    ));
  return condCall ? renderList() : <></>;
};

