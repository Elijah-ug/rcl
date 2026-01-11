export type Admin = {
  name: string;
  email: string;
  updated_at: string;
  created_at: string;
  deleted_at: string;
  id: number;
};

export type GetAdmin = {
  massage: string;
  data: Admin;
};
export type AdminAuthRequest = {
  message: string;
  data: Admin;
  token: string;
};
export type AdminUpdate = {
  name: string;
  email: string;
  password: string;
  id: number;
};
