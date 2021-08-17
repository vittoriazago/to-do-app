import mongooseService from "../db/mongoose.service";
  
const Schema = mongooseService.getMongoose().Schema;

const itemSchema = new Schema({    
  name: String,
  priority: Number,
  deadline: String,
  description: String,
  color: String,
  status: Number,
}),

Item = mongooseService.getMongoose().model('lists', itemSchema);

export default Item;