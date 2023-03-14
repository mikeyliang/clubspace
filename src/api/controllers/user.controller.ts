import { Request, Response, NextFunction } from "express";
import userService from "../services/user.service";

async function get(req: Request, res: Response) {
  try {
    const users = await userService.getUsers();
    return res.status(200).json({
      status: 200,
      data: users,
      message: "Succesfully Retrieved Users",
    });
  } catch (err: any) {
    console.error(`Error while getting users`, err.message);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (err: any) {
    console.error(`Error while creating user`, err.message);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
  } catch (err: any) {
    console.error(`Error while updating user`, err.message);
  }
}

export default {
  get,
  create,
  update,
};
