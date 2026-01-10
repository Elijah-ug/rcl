export type Admin = {
  message: string;
  token: string;
  token_type: string;
  data: {
    name: string;
    email: string;
    updated_at: string | null;
    created_at: string | null;
    id: number;
  };
};
