import express, { Request, Response } from "express";
import { IItem } from "./item.interface";
import * as ItemService from "./item.service";

export const itemsRouter = express.Router();

itemsRouter.get("/", async (req: Request, res: Response) => {
    try {
      const items: IItem[] = await ItemService.findAll();
  
      res.status(200).send(items);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });