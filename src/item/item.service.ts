import { IItem } from "./item.interface";
import Item from "./item.model";

export const findAll = async (limit = 25, page = 0): Promise<IItem[]> => {
  return Item.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
}

export const find = async (id: number): Promise<IItem> => {
  return Item.findOne({ id: id }).exec();
}

export const create = async (newItem: IItem): Promise<number> => {
    const id = new Date().valueOf();

    const itemSaved = new Item({
        ...newItem,
        permissionFlags: 1,
    });
    await itemSaved.save();
    return id;
}