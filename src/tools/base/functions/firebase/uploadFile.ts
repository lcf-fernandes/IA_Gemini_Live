
type Tprops = {
  args: any;
  pass: { fbInit: any[]; arrFiles: any[]; arrFuncs: any[] };
};

export const uploadFile = async (props: Tprops) => {
  console.log('UPLOAD DE ARQUIVOS');
  // ---------- set Props
  const { args, pass } = props;
  const { fbInit, arrFiles, arrFuncs } = pass;
  console.log({ fbInit, arrFiles, arrFuncs });

  // ---------- set Local Imports
  const { getStorage, uploadBytes, uploadString, ref, getDownloadURL } =
    await import('@firebase/storage');

  // -----------------------------
  // -------- set Firestore Call 1
  // -----------------------------
  const storage = getStorage(fbInit[0]);
  const objData = arrFiles[0];
  console.log({ objData });

  objData &&
    objData.assets.forEach(async (currData: any, idx: number) => {
      const time = Date.now().toString();
      const strRefFile = ref(storage, `images/` + time + currData.name);
      console.log({ strRefFile });
      const file = objData.output[idx];
      console.log({ file });
      await uploadBytes(strRefFile, file);

      // ---------- set Return Functions
      const firestoreURL = await getDownloadURL(strRefFile);
      console.log({ firestoreURL });

      for (const currFunc of arrFuncs) await currFunc(args, firestoreURL, idx);
    });
};

