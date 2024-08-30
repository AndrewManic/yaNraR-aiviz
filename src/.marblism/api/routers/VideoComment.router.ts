/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.VideoCommentInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoComment.createMany(input as any))),

        create: procedure.input($Schema.VideoCommentInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoComment.create(input as any))),

        deleteMany: procedure.input($Schema.VideoCommentInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoComment.deleteMany(input as any))),

        delete: procedure.input($Schema.VideoCommentInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoComment.delete(input as any))),

        findFirst: procedure.input($Schema.VideoCommentInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).videoComment.findFirst(input as any))),

        findMany: procedure.input($Schema.VideoCommentInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).videoComment.findMany(input as any))),

        findUnique: procedure.input($Schema.VideoCommentInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).videoComment.findUnique(input as any))),

        updateMany: procedure.input($Schema.VideoCommentInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoComment.updateMany(input as any))),

        update: procedure.input($Schema.VideoCommentInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoComment.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.VideoCommentCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoCommentCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoCommentCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoCommentCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.VideoCommentCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoCommentCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VideoCommentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VideoCommentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoCommentCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoCommentCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VideoCommentGetPayload<T>, Context>) => Promise<Prisma.VideoCommentGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.VideoCommentDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoCommentDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoCommentDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoCommentDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.VideoCommentDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoCommentDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VideoCommentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VideoCommentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoCommentDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoCommentDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VideoCommentGetPayload<T>, Context>) => Promise<Prisma.VideoCommentGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.VideoCommentFindFirstArgs, TData = Prisma.VideoCommentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.VideoCommentFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.VideoCommentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VideoCommentFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VideoCommentFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.VideoCommentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.VideoCommentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.VideoCommentFindManyArgs, TData = Array<Prisma.VideoCommentGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.VideoCommentFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.VideoCommentGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VideoCommentFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VideoCommentFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.VideoCommentGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.VideoCommentGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.VideoCommentFindUniqueArgs, TData = Prisma.VideoCommentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.VideoCommentFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.VideoCommentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VideoCommentFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VideoCommentFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.VideoCommentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.VideoCommentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.VideoCommentUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoCommentUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoCommentUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoCommentUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.VideoCommentUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoCommentUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VideoCommentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VideoCommentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoCommentUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoCommentUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VideoCommentGetPayload<T>, Context>) => Promise<Prisma.VideoCommentGetPayload<T>>
            };

    };
}
