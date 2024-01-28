import { PartialType } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { CreatePortFolioDto } from './create-portfolio.dto';

export class UpdatePortfolioDto extends PartialType(CreatePortFolioDto) {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly description?: string;
}
