import { Championship } from "../api/model/championship";

export interface AppState {
  isAuthenticated: boolean,
  isLoading: boolean,
  championships: Championship[],
  currentChampionship?: Championship
}
