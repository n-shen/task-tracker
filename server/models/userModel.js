import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    user_name: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    backup_code: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.signUp = async function (user_name, password, back_code) {
  if (!user_name || !password || !back_code)
    throw Error("Missing required fields!");

  if (await this.findOne({ user_name }))
    throw Error("Username already in use!");

  // encrypt user password
  const pw_salt = await bcrypt.genSalt(12);
  const pw_hash = await bcrypt.hash(password, pw_salt);
  // encrypt user backup code
  const bc_salt = await bcrypt.genSalt(12);
  const bc_hash = await bcrypt.hash(back_code, bc_salt);

  return await this.create({
    user_name: user_name,
    password: pw_hash,
    backup_code: bc_hash,
  });
};

userSchema.statics.signIn = async function (user_name, password) {
  if (!user_name || !password) throw Error("Missing required fields!");

  const pre_user = await this.findOne({ user_name });
  if (!pre_user) throw Error("Username invalid!");

  const pre_match = await bcrypt.compare(password, pre_user.password);
  if (!pre_match) throw Error("Password invalid!");

  return pre_user;
};

const User = mongoose.model("User", userSchema);

export { User };
