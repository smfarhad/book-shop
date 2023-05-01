export interface LoginForm {
  email: string,
  password: string,
}
export interface RegisterForm {
  email: string;
  password: string;
  c_password: string;
}
export interface Forgot{
  email: string;
}