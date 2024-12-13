import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { APP_FILTER } from '@nestjs/core';
import { EntityPropertyNotFoundExceptionFilter } from 'src/property-not-found-exception-catcher';
import { MailService } from 'src/auth/services/mail.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Add User to use repository in service.
  controllers: [UsersController],
  providers: [
    UsersService,
    MailService,
    {
      provide: APP_FILTER,
      useClass: EntityPropertyNotFoundExceptionFilter,
    },
  ],
})
export class UsersModule {}
