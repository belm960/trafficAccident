import { Role } from './user.role.enum';
export class User {
  name?:string;
  username?:string;
  email?:string;
  password?:string;
  
  role?: Role[];
}