import { Request, Response, NextFunction } from "express";
import userService from "../services/user.service";
import { UserType, userGetWhereType, userCreateDataType, userUpdateWhereType, userUpdateDataType } from '../models/user.model'

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
async function getUserById(req: Request, res: Response) {
  try {
    const where = { id: req.params.id } as userGetWhereType;
    const user = await userService.getUserById(where);
    return res.status(200).json({
      status: 200,
      data: user,
      message: "Succesfully Retrieved User",
    });
  } catch (err: any) {
    console.error(`Error while getting user`, err.message);
  }
}

async function create(req: Request, res: Response) {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json({
      status: 201,
      data: user,
      message: "Successfully Created User",
    })
  } catch (err: any) {
    console.error(`Error while creating user`, err.message);
  }
}

async function update(req: Request, res: Response) {
  try {
    const where = { id: req.params.id } as userUpdateWhereType;
    const data = { firstName: req.body.firstName, lastName: req.body.lastName, email: req.body.email, netId: req.body.netId } as userUpdateDataType
    const user = await userService.updateUser(where, data);
    return res.status(200).json({
      status: 200,
      data: user,
      message: "Successfully Updated User",
    })
  } catch (err: any) {
    console.error(`Error while updating user`, err.message);
  }
}

export default {
  get,
  getUserById,
  create,
  update,
};
