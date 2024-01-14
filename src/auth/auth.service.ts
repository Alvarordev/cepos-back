// import { CreateAuthDto } from './dto/create-auth.dto';
// import { UpdateAuthDto } from './dto/update-auth.dto';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateToken(_createAuthDto: any) {
    return this.jwtService.sign(_createAuthDto, { expiresIn: '60m' });
  }

  async generateRefreshToken(_createAuthDto: any) {
    return this.jwtService.sign(_createAuthDto, { expiresIn: '30m' });
  }
}
