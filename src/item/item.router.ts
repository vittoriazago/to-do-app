import express, { Request, Response } from "express";
import ItemController from "./item.controller";
import { IItem } from "./item.interface";

export const itemsRouter = express.Router();

itemsRouter.get("/", ItemController.getItems);
itemsRouter.post("/", ItemController.saveItem);