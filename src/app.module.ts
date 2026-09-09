import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { MongooseModule } from '@nestjs/mongoose';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot("mongodb+srv://danielcmedeiros6_db_user:n2ibEVG7NKva4CAu@carometro.ks4u9sf.mongodb.net"),

    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'projeto_carometro',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
