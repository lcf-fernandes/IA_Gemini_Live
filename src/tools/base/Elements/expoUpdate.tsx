
// ---------- import Local Tools
import { setData } from '../project';

// ---------- import Packs
import { Alert } from 'react-native';

// FYy - expoUpdate
type Tprops_expoUpdate = { pass: { A: any; B: any } };
export const expoUpdate =
  (props: Tprops_expoUpdate) =>
  async (...args: any) => {
    const { A, B } = props.pass;

    setData({ path: 'sc.A1.loadingVersion', value: 'true' });

    const Updates = await import('expo-updates');

    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        console.warn({ update });

        const fnOk = async () => {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        };
        const msg1 =
          'Há uma nova versão do código do aplicativo. Deseja atualizar?';
        Alert.alert('Atualização do Código', msg1, [
          {
            text: 'Não',
            style: 'cancel',
          },
          { text: 'Sim', onPress: fnOk },
        ]);
      } else {
      }
    } catch (error) {}

    setData({ path: 'sc.A1.loadingVersion', value: 'false' });
  };

