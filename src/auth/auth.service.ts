import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username, pass) {
    if (!username || !pass) {
      throw new BadRequestException(undefined, {
        cause: new Error(),
        description: 'missing variables in body',
      });
    }
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: user.userId,
      username: user.username,
      roles: user.roles,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
      userId: user.userId,
    };
  }
}
