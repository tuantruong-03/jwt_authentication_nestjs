import { Model } from 'mongoose';
import { CreateUserRequest } from '../auth/dto/create-user-request.dto';
import { LoginUserRequest } from '../auth/dto/login-user-request.dto';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from 'src/user/user.schema';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    register(createUserRequest: CreateUserRequest): Promise<string>;
    login(loginUserRequest: LoginUserRequest): Promise<{
        accessToken: string;
    }>;
}
