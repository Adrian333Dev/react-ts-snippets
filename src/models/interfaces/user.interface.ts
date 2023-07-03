import { ICompany } from './company.interface';
import { IAddress } from './location.interface';

export interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IAddress;
	phone: string;
	website: string;
	company: ICompany;
}
