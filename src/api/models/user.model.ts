import { User } from '@prisma/client'

export type UserType = User;

export type userGetWhereType = {
  id: string;
}

export type userCreateDataType = {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  netId: string | undefined;
}

export type userUpdateWhereType = {
  id: string;
}

export type userUpdateDataType = {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  netId: string | undefined;
}

