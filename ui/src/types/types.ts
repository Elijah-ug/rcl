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
  data: Teams[];
};

type Match = {
  created_at: Date;
  date: String;
  host_team_id: number;
  id: number;
  is_played: false;
  time: String;
  updated_at: Date;
  venue: string;
  visitor_team_id: number;
  matchday: number;
  host_score: number;
  visitor_score: number;
  host: Teams;
  visitor: Teams;
  status: string;
};

export type AddMatch = {
  host_team_id: number;
  visitor_team_id: number;
  venue: string;
  date: Date;
  time: Date;
  matchday: number;
};
export type MatchResponse = {
  message: string;
  data: Match[];
};

type Data = {
  title: string;
  description: string;
  updated_at: Date;
  created_at: Date;
  id: number;
};
export type AddNewsPost = {
  title: string;
  description: string;
  image: string | null;
};
export type AddNewsResponse = {
  message: string;
  data: Data;
};
export type FetchNews = {
  data: Data[];
};
