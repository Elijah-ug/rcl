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
type Teams = {
  captain: string;
  coach: string;
  created_at: Date;
  id: number;
  name: string;
  updated_at: Date;
};
export type FetchTeam = {
  message: string;
  teams: Teams[];
};

export type AddMatch = {
  host_team_id: number;
  visitor_team_id: number;
  venue: string;
  date: Date;
  time: Date;
};
