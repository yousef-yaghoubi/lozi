export interface ProductCart {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  images: string[];
  countInStock: number;
  isAvailable: boolean;
  brand: string;
  category: string;
  rating: number;
  numReviews: number;
  price: number;
  discount: number;
  discountedPrice: number;
  createdAt: string;
  updatedAt: string;
}
export interface BlogCart {
  _id: string;
  image: string;
  name: string;
  description: string;
}
