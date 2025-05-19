
// ---------- import Local Tools
import { fireInit } from './fireInit';
// const fireInit = () => console.log('fireInit');

// import { uploadFile } from './uploadFile';
const uploadFile = () => console.log('uploadFile');

import { updateDocTool } from './updateDoc';
// const updateDocTool = () => console.log('updateDoc');

import { getDocsTool } from './getDocs';
// const getDocsTool = () => console.log('getDocs');

import { getDocTool } from './getDoc';
// const getDocTool = () => console.log('getDoc');

import { deleteDocTool } from './deleteDoc';
// const deleteDocTool = () => console.log('deleteDoc');

import { setDocTool } from './setDoc';
// const setDocTool = () => console.log('setDoc');

import { whereConds } from './whereConds';
// const whereConds = () => console.log('whereConds');

import { where } from './where';
// const where = () => console.log('where');

export const firebase = {
  fireInit,

  uploadFile,

  getDocTool,
  getDocsTool,
  updateDocTool,

  deleteDocTool,
  setDocTool,

  whereConds,
  where,
};
