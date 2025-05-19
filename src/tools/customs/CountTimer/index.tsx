
// ---------- import Packs
import { useEffect, useState } from 'react';
import { Pressable, Text, TextStyle, View } from 'react-native';

// ---------- import Local Tools
import { useData } from '../../..';
import { pathSel } from '../../base/project';

type Tprops = { pass: { pathToCheck: any[]; pathRunning: any[]; args: any } };

export const CountTimer = (props: Tprops) => {
  const { pathToCheck, pathRunning, args } = props.pass;

  // ---------- set Watchers
  const [seconds, setSeconds] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const secondsToInit = useData(ct => pathSel(ct, pathToCheck.join()));
  const externalControl = useData(ct => pathSel(ct, pathRunning.join()));

  // ---------- set Controlers Funcs Start / Stop
  const startTimer = () => {
    // setRunning(true);

    const funcToLoop = () => setSeconds(prevSeconds => prevSeconds + 1);
    const newInterval = setInterval(funcToLoop, 1000);
    setIntervalId(newInterval);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(newInterval); // Use newInterval aqui
  };

  const stopTimer = () => {
    // setRunning(false);
    setSeconds(0);
    clearInterval(intervalId);
  };

  // ---------- Defina o formato como 00:00:00
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const newCounter = seconds % 60;
  const remainingSeconds = newCounter.toFixed(0).padStart(2, '0');

  const formattedTime =
    formattedHours + `:` + formattedMinutes + `:` + remainingSeconds;

  // ---------- set Watch Init / Stop
  const condTime1 = externalControl === 'true';
  const condTime2 = externalControl === 'false';
  const condTime3 = externalControl === 'waiting';
  const condNaN = isNaN(secondsToInit);

  useEffect(() => {
    condTime1 && startTimer();
    condTime2 && stopTimer();

    if (condTime3 || condNaN) setSeconds(0);
    if (!!secondsToInit) setSeconds(secondsToInit);
  }, [externalControl]);

  // ---------- set Watch Init Value
  useEffect(() => {
    if (condTime3 || condNaN) setSeconds(0);
    if (!!secondsToInit) setSeconds(secondsToInit);
  }, [secondsToInit]);

  return (
    <View>
      <Text style={stlTxtCounter}>{`` + formattedTime + ``}</Text>
    </View>
  );
};

const stlTxtCounter: TextStyle = {
  fontSize: 18,
  fontWeight: 'bold',
};

