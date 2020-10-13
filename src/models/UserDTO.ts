
export interface UserDTO {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: object;
  passwordResetToken: string;
  passwordResetTokenExpirationDate: number;
  isSystem: boolean;
}

