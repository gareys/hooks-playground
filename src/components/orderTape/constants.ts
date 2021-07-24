export const generateOrder = (orderNumber: number) => ({
  id: orderNumber.toString().padStart(4, '0'),
  item: (1 + Math.random()).toString().slice(2, 4),
  price: (5 + Math.random() * 5).toString().slice(0, 4),
});

export type UniqOrder = ReturnType<typeof generateOrder>;
export type OrderType = 'here' | 'togo';
