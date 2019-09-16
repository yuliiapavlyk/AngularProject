import { IConfig } from 'src/interfaces/config.model';

export interface IConfigState {
  config: IConfig;
}

export const initialConfigState: IConfigState = {
  config: null
};
