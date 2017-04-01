import * as mongoose from "mongoose";
import * as autoIncrement from "mongoose-auto-increment";
import config from "../config";

export const connect = async () => {
  await new Promise((res, rej) =>
    mongoose.connect(config.db.uri, config.db.options)
      .then(() => autoIncrement.initialize(mongoose.connection))
      .then(() => res())
  );
};