import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CreateUserRequest } from './dto/create-user-request.dto';
import { LoginUserRequest } from './dto/login-user-request.dto';
import { AuthService } from './auth.service';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(201)
  async register(@Body() createUserRequest: CreateUserRequest) {
    return this.authService.register(createUserRequest);
  }

  @Post('login')
  @HttpCode(200)
  async login(@Body() loginUserRequest: LoginUserRequest) {
    return this.authService.login(loginUserRequest);
  }
}
