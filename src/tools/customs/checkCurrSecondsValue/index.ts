
type Tprops = {
  pass: {
    objTime: [
      {
        endTimeStamp: number;
        initTimeStamp: number;
        isRunning: 'true' | 'false';
      },
    ];
    arrFuncs: any[];
    args: any;
  };
};

export const checkCurrSecondsValue = async (props: Tprops) => {
  // ---------- set Arguments
  const { objTime, arrFuncs, args } = props.pass;

  // -----------------------------
  // ---------- prepare Calc Data
  // -----------------------------
  const isRunning = objTime[0].isRunning;
  const initTime = objTime[0].initTimeStamp;
  const endTime = objTime[0].endTimeStamp;
  const condTime1 = isRunning === 'true';
  const nowTime = Date.now();

  const condValueToCompare = condTime1 ? nowTime : endTime;

  const calcDiff = condValueToCompare - initTime;

  // Convertendo para segundos
  const elapsedSeconds = calcDiff / 1000;

  for (const currFunc of arrFuncs) currFunc(args, elapsedSeconds);
};

