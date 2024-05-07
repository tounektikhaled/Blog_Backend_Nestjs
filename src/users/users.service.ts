import { Injectable } from '@nestjs/common';
import { Prisma, Role } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
import * as bcrypt from 'bcrypt'

export type User = any;

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) { }

  async create(createUserDto: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10)
    return await this.databaseService.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword
      }
    })
  }

  async findAll(role?: Role) {
    if (role) return this.databaseService.user.findMany({
      where: {
        role,
      }
    })
    return this.databaseService.user.findMany()
  }

  async findOne(id: number) {
    return this.databaseService.user.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateUserDto: Prisma.UserUpdateInput) {
    let hashedPassword: string | undefined;

    // Vérifiez si updateUserDto.password est une chaîne de caractères
    if (typeof updateUserDto.password === 'string') {
      // Si c'est le cas, hachez le mot de passe
      hashedPassword = await bcrypt.hash(updateUserDto.password, 10);
    } else if (updateUserDto.password) {
      // Sinon, extrayez la chaîne de caractères appropriée de l'objet StringFieldUpdateOperationsInput
      hashedPassword = await bcrypt.hash(updateUserDto.password.set, 10);
    }
    return this.databaseService.user.update({
      where: { id },
      data: {
        ...updateUserDto,
        password: hashedPassword
      }
    });
  }

  async remove(id: number) {
    return this.databaseService.user.delete({
      where: { id }
    })
  }

  async findOneByUsernameOrEmail(usernameOrEmail: string): Promise<User | null> {
    if (!usernameOrEmail) {
      return null;
    }
    const isEmail = usernameOrEmail.includes('@'); 
    const user = await this.databaseService.user.findUnique({
      where: isEmail ? { email: usernameOrEmail } : { username: usernameOrEmail },
    });
  
    return user;
  }
   
}

