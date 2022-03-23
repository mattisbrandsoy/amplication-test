import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { UserDetailResolverBase } from "./base/userDetail.resolver.base";
import { UserDetail } from "./base/UserDetail";
import { UserDetailService } from "./userDetail.service";

@graphql.Resolver(() => UserDetail)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UserDetailResolver extends UserDetailResolverBase {
  constructor(
    protected readonly service: UserDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
