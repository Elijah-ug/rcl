export type Admin = {
  name: string;
  email: string;
  updated_at: string;
  created_at: string;
  deleted_at: string;
  id: number;
};

export type GetAdmin = {
  data: Admin;
  message: string;
};
export type AdminAuthRequest = {
  message: string;
  data: Admin;
  token: string;
  token_type: string;
};
export type AdminUpdate = {
  name: string;
  email: string;
  password: string;
  id: number;
};

// team
export type AddTeam = {
  name: string;
  coach: string;
  captain: string;
};
