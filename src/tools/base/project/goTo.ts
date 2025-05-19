
// ---------- import Local Tools
import { getVarValue } from './getVarValue';
import { useRoutes } from '../../..';

export const css1 =
  'color: lightblue; background-color: darkblue; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css2 =
  'color: cyan; background-color: darkblue; font-size: 10px; padding: 2px 6px; border-radius: 3px';

// ---------- set GoTo Router (with All Screens Access)
export const goTo = (newRoute: string) => {
  const [condVar, varValue] = getVarValue(newRoute, 'noComponent');

  if (condVar) {
    useRoutes.setState({ currRoute: varValue });

    // --------- set Consoles System
    console.log('%cgoTo', css1);
    console.log('%cscreen:', css2, varValue);
  }

  // ---------- get Function from A_Project Scope
  if (!condVar) {
    // --------- set Consoles System
    console.log('%cgoTo', css1);
    console.log('%cto screen:', css2, newRoute);

    useRoutes.setState({ currRoute: newRoute });
  }
};
