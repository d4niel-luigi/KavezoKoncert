import { IsBoolean, IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateKoncertekDto { 

  @IsString()
  @IsNotEmpty()
  performer:string

  @IsDateString()
  @IsNotEmpty()
  started_at: Date

  @IsNumber()
  @IsNotEmpty()
  lenght: number

  @IsBoolean()
  @IsNotEmpty()
  fail: boolean

}
