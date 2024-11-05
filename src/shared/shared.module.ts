import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/user/user.schema";

@Module({
    imports: [
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      JwtModule.register({ secret: process.env.JWT_SECRET, global: true, signOptions: {expiresIn: '900s'} }),
    ],
    exports: [
      MongooseModule,
      JwtModule,
    ],
  })
  export class SharedModule {}
  