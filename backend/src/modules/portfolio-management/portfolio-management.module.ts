import { Module } from '@nestjs/common';
import { PortfolioManagementController } from './portfolio-management.controller';
import { PortfolioManagementService } from './portfolio-management.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portfolio } from './entities/portfolio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Portfolio])],
  controllers: [PortfolioManagementController],
  providers: [PortfolioManagementService],
})
export class PortfolioManagementModule {}
