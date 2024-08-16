export type Product = {
  _id: string;
  title: string;
  image: string;
  inStock: boolean;
  price: number;
  assured: boolean;
  status?: string;
  quantity?: number;
};

export type ProductsArray = Product[];
