export type Product = {
  _id: string;
  title: string;
  image: string;
  quantity: number;
  price: number;
  assured: boolean;
  status?: string;
};

export type ProductsArray = Product[];
