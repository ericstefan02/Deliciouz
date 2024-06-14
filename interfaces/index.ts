export interface Receipt {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}
export interface ReceiptsResponse {
  recipes: Receipt[];
  total: number;
  skip: number;
  limit: number;
  //ovo je za paginaciju, necu koristiti u ovom projektu
}
//ovde cu navesti samo one podatke koje koristim, jer ih ima previše
export interface Chef {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  achievements: number;
}
export interface ChefResponse {
  chefs: Chef[];
}
