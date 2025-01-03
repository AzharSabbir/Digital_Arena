import { Module } from '@nestjs/common';
import { GraphicsTemplatesController } from './graphics-templates.controller';
import { GraphicsTemplatesService } from './graphics-templates.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entities/product.entity';
import { Files } from 'src/entities/files.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Files])], // Add Product and File to use repository in service.],
  controllers: [GraphicsTemplatesController],
  providers: [GraphicsTemplatesService],
})
export class GraphicsTemplatesModule {}
