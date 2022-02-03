import { Address } from "./Address"
import { Bill } from "./Billfile";

export interface Customer
{
    cid: number,
    fullname:String,
    phone:number,
    email:String,
    password:String,
}