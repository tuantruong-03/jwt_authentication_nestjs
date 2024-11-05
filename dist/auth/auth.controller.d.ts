import { CreateUserRequest } from './dto/create-user-request.dto';
import { LoginUserRequest } from './dto/login-user-request.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserRequest: CreateUserRequest): Promise<string>;
    login(loginUserRequest: LoginUserRequest): Promise<{
        accessToken: string;
    }>;
}
