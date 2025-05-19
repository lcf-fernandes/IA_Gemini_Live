
export const getAddress = (array, type) => {
  let address_part_found = '';

  array.map(i => {
    const types = i.types;

    types.map(e => {
      const match = e.includes(type);

      if (match) address_part_found = i.short_name;
    });
  });

  return address_part_found;
};

