export interface BodyLoginRequest {
  email: string;
  password: string;
}

export interface BodyRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface Instruction {
  id: number;
  step_number: number;
  image?: string;
  description: string;
  dish?: Dish;
  dishId?: number;
}

export interface Dish {
  id: number;
  name: string;
  image?: string;
  description: string;
  instructions: Instruction[];
  cretator: User;
  creatorId: number;
  ingredients: Ingredient[];
}

export interface Ingredient {
  id: number;
  name: string;
  image?: string;
  dishes: Dish[];
}

export interface User {
  id: number;
  name: string;
  image?: string;
  email: string;
  password: string;
  dishes: Dish[];
  refreshToken?: string;
}
