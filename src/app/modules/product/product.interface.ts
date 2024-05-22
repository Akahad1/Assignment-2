export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: [
    {
      type: string;
      value: string;
    },
    {
      type: string;
      value: string;
    }
  ];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};

// export interface ProductModel extends Model<TProduct> {
//   isUserExists(id: string): Promise<TProduct | null>;
// }
