import express, { Request, Response } from "express";
import { IItem } from "./item.interface";
import * as ItemService from "./item.service";

export const itemsRouter = express.Router();

itemsRouter.get("/", async (req: Request, res: Response) => {
    try {
      let page = parseInt(req.query.page as string);
      let limit = parseInt(req.query.limit as string);
      const items: IItem[] = await ItemService.findAll(limit, page);
  
      res.status(200).send(items);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });


itemsRouter.post("/", async (req: Request, res: Response) => {
    try {
      const item: IItem = req.body;
  
      const newItem = await ItemService.create(item);
  
      res.status(201).json(newItem);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });