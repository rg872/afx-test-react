import { FactCheck } from "@mui/icons-material";

export interface Fact {
  user: string;
  text: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface GetFactResponse {
  user: string;
  text: string;
  deleted: boolean;
  updatedAt: string; // timeStamp
  createdAt: string; // timeStamp
}

export interface CatInitialState {
  fact: null | Fact;
}
