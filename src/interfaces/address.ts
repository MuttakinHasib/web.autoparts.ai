export interface IAddressData {
  address1: string;
  address2: string;
  city: string;
  company: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  postcode: string;
  state: string;
}

export interface IAddress extends IAddressData {
  default: boolean;
  id: number;
}
