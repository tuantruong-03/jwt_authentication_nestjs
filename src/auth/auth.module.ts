import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { config } from 'dotenv';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User, UserSchema } from 'src/user/user.schema';
import { SharedModule } from 'src/shared/shared.module';

config()
@Module({
    imports: [SharedModule],
    controllers: [AuthController],
    providers: [AuthService],
    
})
export class AuthModule {}