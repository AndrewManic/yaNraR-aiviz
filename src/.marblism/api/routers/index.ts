/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createVideoRouter from "./Video.router";
import createVideoTagRouter from "./VideoTag.router";
import createVideoCommentRouter from "./VideoComment.router";
import createSubscriptionRouter from "./Subscription.router";
import createPaymentRouter from "./Payment.router";
import createRagVectorRouter from "./RagVector.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as VideoClientType } from "./Video.router";
import { ClientType as VideoTagClientType } from "./VideoTag.router";
import { ClientType as VideoCommentClientType } from "./VideoComment.router";
import { ClientType as SubscriptionClientType } from "./Subscription.router";
import { ClientType as PaymentClientType } from "./Payment.router";
import { ClientType as RagVectorClientType } from "./RagVector.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        video: createVideoRouter(router, procedure),
        videoTag: createVideoTagRouter(router, procedure),
        videoComment: createVideoCommentRouter(router, procedure),
        subscription: createSubscriptionRouter(router, procedure),
        payment: createPaymentRouter(router, procedure),
        ragVector: createRagVectorRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    video: VideoClientType<AppRouter>;
    videoTag: VideoTagClientType<AppRouter>;
    videoComment: VideoCommentClientType<AppRouter>;
    subscription: SubscriptionClientType<AppRouter>;
    payment: PaymentClientType<AppRouter>;
    ragVector: RagVectorClientType<AppRouter>;
}
