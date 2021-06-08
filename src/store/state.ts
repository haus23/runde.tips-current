import { Championship } from "../api/model/championship";

export interface AppState {
  isLoading: boolean;
  championships: Championship[],
  currentChampionship?: Championship
}
