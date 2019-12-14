/*define UserSchema and [static] methods to store user infomation in mongoDB.*/

import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

//this ����� ���� ȭ��ǥ �Լ�x, function Ű����� ����
UserSchema.methods.setPassword = async function(password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

//hash inputed password, compare it with password in DB
UserSchema.methods.checkPassword = async function(password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

//static �Լ��� this�� ��(User)�� ����Ŵ
UserSchema.statics.findByUsername = function(username) {
  return this.findOne({ username });
};

UserSchema.methods.serialize = function() {
  const data = this.toJSON();
  //��й�ȣ ���� �������� ������� hashedPassword�� JSON��ü���� ����
  //�����ͺ��̽��� ������ ������, JSON���� ���������� ����
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = function() {
  const token = jwt.sign(
    {
      _id: this.id,
      username: this.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    },
  );
  return token;
};

const User = mongoose.model('User', UserSchema);
export default User;
