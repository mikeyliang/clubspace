import { Request, Response, NextFunction } from "express";
import clubService from "../services/club.service";
import { ClubType, clubGetWhereType, clubUpdateWhereType, clubCreateDataType, clubUpdateDataType } from '../models/club.model'



async function get(req: Request, res: Response) {
  try {
    const clubs = await clubService.getClubs();
    return res.status(200).json({
      status: 200,
      data: clubs,
      message: "Succesfully Retrieved Clubs",
    });
  }
  catch (err: any) {
    console.error(`Error while getting clubs`, err.message);
  }
}

async function getClubById(req: Request, res: Response) {
  try {
    const where = { id: req.params.id } as clubGetWhereType;
    const club = await clubService.getClubById(where);
    return res.status(200).json({
      status: 200,
      data: club,
      message: "Succesfully Retrieved Club",
    });
  } catch (err: any) {
    console.error(`Error while getting club`, err.message);
  }
}


async function create(req: Request, res: Response) {
  try {
    const data = { name: req.body.name, description: req.body.description, 
      email: req.body.email, location: req.body.location, college: 
      req.body.college, website: req.body.website } as clubCreateDataType
    const club = await clubService.createClub(data);
    return res.status(201).json({
      status: 201,
      data: club,
      message: "Successfully Created Club",
    })
  } catch (err: any) {
    console.error(`Error while creating club`, err.message);
  }
}


async function update(req: Request, res: Response) {
  try {
    const where = { id: req.params.id } as clubUpdateWhereType;
    const data = { name: req.body.name, description: req.body.description, email: req.body.email, location: req.body.location, college: req.body.college, website: req.body.website } as clubUpdateDataType
    const club = await clubService.updateClub(where, data);
    return res.status(200).json({
      status: 200,
      data: club,
      message: "Successfully Updated Club",
    })
  } catch (err: any) {
    console.error(`Error while updating club`, err.message);
  }
}

export default {
  get,
  getClubById,
  create,
  update,
};