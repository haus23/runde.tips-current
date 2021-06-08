import { Doc } from "./doc";

export interface ChampionshipData {
  title: string;
  published: boolean;
}

export interface Championship extends ChampionshipData, Doc {}
