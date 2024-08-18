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

export type TUserDetails = {
  id: string;
  username: string;
  email: string;
};

export type TLoginForm = {
  email: string;
  password: string;
};

export type TSignUpForm = TLoginForm & {
  username: string;
};
