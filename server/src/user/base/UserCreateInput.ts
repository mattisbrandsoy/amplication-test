/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AssetCreateNestedManyWithoutUsersInput } from "./AssetCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";
import { UserDetailCreateNestedManyWithoutUsersInput } from "./UserDetailCreateNestedManyWithoutUsersInput";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => AssetCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AssetCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AssetCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  assets?: AssetCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @Field(() => [String])
  roles!: Array<string>;

  @ApiProperty({
    required: false,
    type: () => TaskCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => TaskCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => TaskCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  tasks?: TaskCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => UserDetailCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserDetailCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserDetailCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  userDetails?: UserDetailCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { UserCreateInput };
