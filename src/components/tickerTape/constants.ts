export const generateOrder = () => ({
  id: Math.random(),
  size: (1 + Math.random()).toString().slice(0, 6),
  price: (200 + Math.random() * 2000).toString().slice(0, 8),
});

export type UniqOrder = ReturnType<typeof generateOrder>;
export type OrderType = 'sell' | 'buy';
