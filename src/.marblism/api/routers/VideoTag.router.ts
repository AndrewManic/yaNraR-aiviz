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

        createMany: procedure.input($Schema.VideoTagInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTag.createMany(input as any))),

        create: procedure.input($Schema.VideoTagInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTag.create(input as any))),

        deleteMany: procedure.input($Schema.VideoTagInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTag.deleteMany(input as any))),

        delete: procedure.input($Schema.VideoTagInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTag.delete(input as any))),

        findFirst: procedure.input($Schema.VideoTagInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).videoTag.findFirst(input as any))),

        findMany: procedure.input($Schema.VideoTagInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).videoTag.findMany(input as any))),

        findUnique: procedure.input($Schema.VideoTagInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).videoTag.findUnique(input as any))),

        updateMany: procedure.input($Schema.VideoTagInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTag.updateMany(input as any))),

        update: procedure.input($Schema.VideoTagInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).videoTag.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.VideoTagCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoTagCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoTagCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoTagCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.VideoTagCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoTagCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VideoTagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VideoTagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoTagCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoTagCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VideoTagGetPayload<T>, Context>) => Promise<Prisma.VideoTagGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.VideoTagDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoTagDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoTagDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoTagDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.VideoTagDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoTagDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VideoTagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VideoTagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoTagDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoTagDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VideoTagGetPayload<T>, Context>) => Promise<Prisma.VideoTagGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.VideoTagFindFirstArgs, TData = Prisma.VideoTagGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.VideoTagFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.VideoTagGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VideoTagFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VideoTagFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.VideoTagGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.VideoTagGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.VideoTagFindManyArgs, TData = Array<Prisma.VideoTagGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.VideoTagFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.VideoTagGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VideoTagFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VideoTagFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.VideoTagGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.VideoTagGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.VideoTagFindUniqueArgs, TData = Prisma.VideoTagGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.VideoTagFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.VideoTagGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VideoTagFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VideoTagFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.VideoTagGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.VideoTagGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.VideoTagUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoTagUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoTagUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoTagUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.VideoTagUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoTagUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VideoTagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VideoTagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoTagUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoTagUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VideoTagGetPayload<T>, Context>) => Promise<Prisma.VideoTagGetPayload<T>>
            };

    };
}
