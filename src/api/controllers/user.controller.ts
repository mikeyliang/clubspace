import { Request, Response, NextFunction } from "express";
import userServices from "../services/user.service";

async function get(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (err: any) {
    console.error(`Error while getting users`, err.message);
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (err: any) {
    console.error(`Error while creating user`, err.message);
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (err: any) {
    console.error(`Error while updating user`, err.message);
    next(err);
  }
}

export default {
  get,
  create,
  update,
};
