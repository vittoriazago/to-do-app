/**
 * Data Model Interfaces
 */

import { Item } from "../item/item.interface";

/**
 * In-Memory Store
 */
let items: Item[] = [
  {
    id: 1,
    name: "Study node",
    description: "Read articles and watch demos on youtube",
    color: "blue",
    deadline: "-",
    priority: 1,
    status: 1
  },  
  {
    id: 2,
    name: "Exercise",
    description: "Do more exercise, improve health care",
    color: "red",
    deadline: "-",
    priority: 2,
    status: 1
  },
];

/**
 * Service Methods
 */

export const findAll = async (): Promise<Item[]> => Object.values(items);

export const find = async (id: number): Promise<Item> => items[id];


export const create = async (newItem: Item): Promise<Item> => {
    const id = new Date().valueOf();
  
    items[id] = {
      ...newItem,
    };
  
    return items[id];
  };