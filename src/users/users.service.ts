import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { UserDocument, User } from "./schemas/users.schemas.js";
import { CreateUserDto } from "./dto/create-user.dto.js";
import { UpdateUserDto } from "./dto/update-user.dto.js";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly usersModel: Model<UserDocument>,
  ) {}

  async createUser(data: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this.usersModel(data);
    return createdUser.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return this.usersModel.find().exec();
  }

  async findById(id: string): Promise<UserDocument | null> {
    return this.usersModel.findById(id).exec();
  }

  async updateUser(
    id: string,
    data: UpdateUserDto,
  ): Promise<UserDocument | null> {
    return this.usersModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
  }

  async deleteUser(id: string): Promise<UserDocument | null> {
    return this.usersModel.findByIdAndDelete(id).exec();
  }
}
