// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {main} from '../models';
import {market} from '../models';

export function CheckConnection(arg1:string,arg2:string,arg3:string):Promise<main.Addresses>;

export function CreateBazaar(arg1:string,arg2:string,arg3:string,arg4:string,arg5:string,arg6:string,arg7:string,arg8:string,arg9:string):Promise<string>;

export function FetchOffers(arg1:string):Promise<market.Offers>;

export function GetBalance(arg1:string):Promise<main.Balance>;

export function HowManyOffers(arg1:string):Promise<number>;

export function PostOffer(arg1:string,arg2:string,arg3:string,arg4:string,arg5:string,arg6:string,arg7:number,arg8:string,arg9:string):Promise<string>;

export function SendDonation(arg1:string,arg2:string,arg3:string):Promise<string>;

export function UpdateOffer(arg1:string,arg2:string,arg3:string,arg4:string,arg5:string,arg6:string,arg7:string,arg8:number,arg9:string,arg10:string):Promise<string>;

export function VendorExistsCheck(arg1:string,arg2:string):Promise<boolean>;
