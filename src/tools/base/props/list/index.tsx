
import React from 'react';
import { mapElements } from '../../project';

// ItemSeparatorComponent
type Tprops_ItemSeparatorComponent = {
  pass: { component: any[] };
};
export const ItemSeparatorComponent = (
  props: Tprops_ItemSeparatorComponent,
) => {
  const { component } = props.pass;

  const children = mapElements(component, {});

  return { ItemSeparatorComponent: () => <>{children}</> };
};

// ListFooterComponent
type Tprops_ListFooterComponent = {
  pass: { component: any[] };
};
export const ListFooterComponent = (props: Tprops_ListFooterComponent) => {
  const { component } = props.pass;

  const children = mapElements(component, {});

  return { ListFooterComponent: () => <>{children}</> };
};

// ListFooterComponentStyle
type Tprops_ListFooterComponentStyle = {
  pass: { styles: any[] };
};
export const ListFooterComponentStyle = (
  props: Tprops_ListFooterComponentStyle,
) => {
  const { styles } = props.pass;

  console.log({ styles });

  return { ListFooterComponentStyle: styles };
};

// ListHeaderComponent
type Tprops_ListHeaderComponent = {
  pass: { component: any[] };
};
export const ListHeaderComponent = (props: Tprops_ListHeaderComponent) => {
  const { component } = props.pass;

  const children = mapElements(component, {});

  return { ListHeaderComponent: () => <>{children}</> };
};

// ListHeaderComponentStyle
type Tprops_ListHeaderComponentStyle = {
  pass: { styles: any };
};
export const ListHeaderComponentStyle = (
  props: Tprops_ListHeaderComponentStyle,
) => {
  const { styles } = props.pass;

  console.log({ styles });

  return { ListHeaderComponentStyle: styles };
};

// columnWrapperStyle
type Tprops_columnWrapperStyle = {
  pass: { styles: any };
};
export const columnWrapperStyle = (props: Tprops_columnWrapperStyle) => {
  const { styles } = props.pass;

  console.log({ styles });

  return { columnWrapperStyle: styles };
};

// extraData
type Tprops_extraData = { pass: { data: any } };
export const extraData = (props: Tprops_extraData) => {
  const { data } = props.pass;

  console.log({ data });

  return { extraData: data };
};

// getItemLayout
type Tprops_getItemLayout = {
  pass: { func: any };
};
export const getItemLayout = (props: Tprops_getItemLayout) => {
  const { func } = props.pass;

  console.log({ func });

  return { getItemLayout: func };
};

// horizontal
type Tprops_horizontal = {
  pass: { boolean: any };
};
export const horizontal = (props: Tprops_horizontal) => {
  const { boolean } = props.pass;

  const toBoolean = boolean.join() === 'true';

  console.log({ toBoolean });

  return { horizontal: toBoolean };
};

// initialScrollIndex
type Tprops_initialScrollIndex = {
  pass: { index: any };
};
export const initialScrollIndex = (props: Tprops_initialScrollIndex) => {
  const { index } = props.pass;

  console.log({ index });

  return { initialScrollIndex: index };
};

// inverted
type Tprops_inverted = { pass: { boolean: any } };
export const inverted = (props: Tprops_inverted) => {
  const { boolean } = props.pass;

  console.log({ boolean });

  return { inverted: boolean };
};

// keyExtractor
type Tprops_keyExtractor = {
  pass: { func: any };
};
export const keyExtractor = (props: Tprops_keyExtractor) => {
  const { func } = props.pass;

  console.log({ func });

  return { keyExtractor: func };
};

// onRefresh
type Tprops_onRefresh = { pass: { func: any } };
export const onRefresh = (props: Tprops_onRefresh) => {
  const { func } = props.pass;

  console.log({ func });

  return { onRefresh: func };
};

// ListEmptyComponent
type Tprops_ListEmptyComponent = {
  pass: { component: any[] };
};
export const ListEmptyComponent = (props: Tprops_ListEmptyComponent) => {
  const { component } = props.pass;

  const children = mapElements(component, {});

  return { ListEmptyComponent: () => <>{children}</> };
};

// onEndReachedThreshold
type Tprops_onEndReachedThreshold = {
  pass: { A: any; B: any; C: any; D: any; args: any };
};
export const onEndReachedThreshold = (props: Tprops_onEndReachedThreshold) => {
  const { A, B, C, D, args } = props.pass;

  console.log({ A });

  // return; aqui fica comentado por enquanto
};

// onEndReached
type Tprops_onEndReached = {
  pass: { A: any; B: any; C: any; D: any; args: any };
};
export const onEndReached = (props: Tprops_onEndReached) => {
  const { A, B, C, D, args } = props.pass;

  console.log({ A });

  // return; aqui fica comentado por enquanto
};

// numColumns
type Tprops_numColumns = {
  pass: { numberToEnter: any };
};
export const numColumns = (props: Tprops_numColumns) => {
  const { numberToEnter } = props.pass;
  const toNumber = numberToEnter[0].replace('px', '');
  const toNum = Number(toNumber);

  console.log({ numberToEnter, toNumber, toNum });

  return { numColumns: toNum };
};

// --------------------------------------
// --------------------------------------
// --------------------------------------

