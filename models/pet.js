"use strict";

const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

mongoosePaginate.paginate.options = {
  limit: 3 //how many records to show on each page
};

const PetSchema = new Schema(
  {
    name: { type: String, required: true },
    species: { type: String },
    birthday: { type: Date },
    picUrl: { type: String },
    picUrlSq: { type: String },
    favoriteFood: { type: String },
    description: { type: String }
  },
  {
    timestamps: true
  }
);

PetSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Pet", PetSchema);
