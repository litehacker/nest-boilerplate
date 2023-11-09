import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { PostsModule } from './posts/posts.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './users/roles/roles.guard';

@Module({
  imports: [AuthModule, UsersModule, PostsModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
