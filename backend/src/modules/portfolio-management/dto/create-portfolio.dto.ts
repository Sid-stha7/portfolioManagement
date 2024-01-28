import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsNumber, IsDecimal } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';

export class CreatePortFolioDto {
  @ApiProperty({
    description: 'name',
    type: String,
    example: 'mero',
  })
  @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
  name: string;

  @ApiProperty({
    description: 'Total Value',
    type: Number,
    example: 1000,
  })
  @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
  @IsNumber()
  totalValue: number;

  @ApiProperty({
    description: 'Day Gain',
    type: Number,
    example: 50,
  })
  @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
  @IsNumber()
  dayGain: number;

  @ApiProperty({
    description: 'Unrealised Gain',
    type: Number,
    example: 200,
  })
  @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
  @IsNumber()
  unrealisedGain: number;

  @ApiProperty({
    description: 'Realised Gain',
    type: Number,
    example: 300,
  })
  @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
  @IsNumber()
  realisedGain: number;

  @ApiProperty({
    description: 'Fam Value',
    type: Number,
    example: 150,
  })
  @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
  @IsNumber()
  famValue: number;

  @ApiProperty({
    description: 'Mero Value',
    type: Number,
    example: 200,
  })
  @IsNotEmpty({ message: i18nValidationMessage('validation.NOT_EMPTY') })
  @IsNumber()
  meroValue: number;
}
