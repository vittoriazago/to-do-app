import mongooseService from "../db/mongoose.service";
import { IItem } from "./item.interface";
  
const mongoClient = mongooseService.getMongoose();

const itemSchema = new mongoClient.Schema({    
  name: String,
  priority: Number,
  deadline: String,
  description: String,
  color: String,
  status: Number,
}),

Item = mongoClient.model<IItem>('lists', itemSchema);

export default Item;