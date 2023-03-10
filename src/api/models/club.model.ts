import { Club } from '@prisma/client'

export type ClubType = Club;


export type clubGetWhereType = {
  id: string;
}

export type clubCreateDataType = {
  name: string | undefined;
  description: string | undefined;
  email: string | undefined;
  location: string | undefined;
  college: string | undefined;
  website: string | undefined;
}

export type clubUpdateWhereType = {
  id: string;
}

export type clubUpdateDataType = {
  name: string | undefined;
  description: string | undefined;
  email: string | undefined;
  location: string | undefined;
  college: string | undefined;
  website: string | undefined;
}