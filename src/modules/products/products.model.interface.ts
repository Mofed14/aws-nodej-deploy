import { IMongo } from '@helpers/general.types/general.model';

export interface IProduct extends IMongo {
 _id: IMongo['_id'];
  name: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  isDeleted?: boolean;
  icon?: string;
}