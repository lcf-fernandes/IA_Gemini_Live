
export const asyncFn = (url: string, configCall: {}) => {
  const response = fetch(url, configCall).catch(asynFnErr => {
    console.log({ asynFnErr });
    return asynFnErr;
  });

  return response;
};

