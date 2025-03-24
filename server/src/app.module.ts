import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [PrometheusModule.register({})],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
