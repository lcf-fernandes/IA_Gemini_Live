
// ---------- import Local Tools
import { setArgsVars, getCtData, setData, goTo } from '../project';

// F5 - (custom) (newBase)
type Tprops_F5 = { pass: { args: any } };
export const F5 = (props: Tprops_F5) => async () => {
  const { args } = props.pass;

  const res1 = setArgsVars('{{all.api.messages.apiSuccess}}', args);

  console.warn('((((( F5 )))))', { res1 });
  const imgDefault =
    'https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif';
  const condImage = res1.urlImagem ?? imgDefault;

  const objApiRes = {
    id: res1.id,
    code: res1.id,

    navbarTitle: 'DADOS START-MORFOS',
    navbarTitle2: 'DADOS START-MORFOS',
    agency: res1.orgao,
    sector: res1.setor,
    sectorInv: 'xxx',

    codeBar: '',

    desc: res1.descricao,
    obs: '',

    conservation: res1.estadoConservacao,
    image: condImage,
  };

  setData({ path: 'apiData.A8.selectedData', value: objApiRes });
  setData({ path: 'toggles.A8.diffLocality', value: 'false' });
  setData({ path: 'formsData.A8.condPending', value: 'xx' });

  // ---------------------------------------------------------
  // --------- A8 REGRAS INCLUSÃO VS ANALISE/INVENTARIO NORMAL
  // ---------------------------------------------------------
  const arrInv1 = getCtData('apiData.A6.selectedData.inventories');
  const assetid = getCtData('apiData.A8.selectedID');
  const currInvent = arrInv1.find(i => i.id === assetid);

  let condInc = currInvent && currInvent.inconsistency;
  const condAnalisys = condInc === 'DIVERGENCIA_DESCRICAO';
  const condInclude = condInc === 'NAO_CADASTRADO';

  const path4 = 'apiData.A8.selectedData.msgSetAnalisys';
  setData({ path: path4, value: String(condAnalisys) });

  const path5 = 'toggles2.A8.newRequest';
  setData({ path: path5, value: String(condInclude) });

  const path6 = 'formsData.A8.iptsChanges.conservation.nome';
  const conservValue = currInvent.conservation;
  setData({ path: path6, value: conservValue });

  goTo('patrimonyProfile');

  setData({ path: 'toggles.loading', value: false });
};

