/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import { Item } from "./item.interface";
import * as ItemService from "./item.service";

 /**
 * Router Definition
 */

 export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

itemsRouter.get("/", async (req: Request, res: Response) => {
    try {
      const items: Item[] = await ItemService.findAll();
  
      res.status(200).send(items);
    } catch (e) {
      res.status(500).send(e.message);
    }
  });