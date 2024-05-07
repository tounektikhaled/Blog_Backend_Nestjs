import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async signIn(usernameOrEmail: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByUsernameOrEmail(usernameOrEmail);

    if (!user) {
      throw new UnauthorizedException('Invalid username or email');
    }

    const isPasswordValid = await bcrypt.compare(pass, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    const { password, ...result } = user;
    // TODO: Générer un JWT et le retourner ici
    // au lieu de l'objet utilisateur
    const payload = { sub: user.userId, username: user.username, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
