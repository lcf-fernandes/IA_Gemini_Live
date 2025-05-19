
// F9 - setThumbnail
type Tprops_setThumbnail = { pass: { A: any[] } };
export const setThumbnail =
  (props: Tprops_setThumbnail) =>
  async (...args: any) => {
    const { A } = props.pass;

    console.warn('SEt Thumbnail');

    for (const currFunc of A) await currFunc('', args);
  };

