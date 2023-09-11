import { ArgsType, Field } from "@nestjs/graphql";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CheckUserValues, Credentials, SignupCredentials } from "./Credentials";

@ArgsType()
export class LoginArgs {
  @Field(() => Credentials, { nullable: false })
  @Type(() => Credentials)
  @ValidateNested()
  credentials!: Credentials;
}

@ArgsType()
export class SignupArgs {
  @Field(() => Credentials, { nullable: false })
  @Type(() => Credentials)
  @ValidateNested()
  credentials!: SignupCredentials;
}

@ArgsType()
export class CheckUserArgs {
  @Field(() => CheckUserValues, { nullable: false })
  @Type(() => Credentials)
  @ValidateNested()
  CheckUserValues!: CheckUserValues;
}
