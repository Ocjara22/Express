import mongoose, { Schema } from "mongoose";

const ArticleSchema = new Schema({
  category: { type: Schema.ObjectId, ref: "category" },
  code: { type: String, maxlength: 64 },
  name: { type: String, maxlength: 50, unique: true, required: true },
  description: { type: String, maxlength: 255 },
  sale_price: { type: Number, required: true },
  stock: { type: Number, required: true },
  status: { type: Number, default: 1 },
  createAt: { type: Date, default: Date.now },
});

const Article = mongoose.model("article", ArticleSchema);
export default Article;
