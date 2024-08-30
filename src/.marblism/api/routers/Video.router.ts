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

        createMany: procedure.input($Schema.VideoInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).video.createMany(input as any))),

        create: procedure.input($Schema.VideoInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).video.create(input as any))),

        deleteMany: procedure.input($Schema.VideoInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).video.deleteMany(input as any))),

        delete: procedure.input($Schema.VideoInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).video.delete(input as any))),

        findFirst: procedure.input($Schema.VideoInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).video.findFirst(input as any))),

        findMany: procedure.input($Schema.VideoInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).video.findMany(input as any))),

        findUnique: procedure.input($Schema.VideoInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).video.findUnique(input as any))),

        updateMany: procedure.input($Schema.VideoInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).video.updateMany(input as any))),

        update: procedure.input($Schema.VideoInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).video.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.VideoCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.VideoCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VideoGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VideoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VideoGetPayload<T>, Context>) => Promise<Prisma.VideoGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.VideoDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.VideoDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VideoGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VideoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VideoGetPayload<T>, Context>) => Promise<Prisma.VideoGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.VideoFindFirstArgs, TData = Prisma.VideoGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.VideoFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.VideoGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VideoFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VideoFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.VideoGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.VideoGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.VideoFindManyArgs, TData = Array<Prisma.VideoGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.VideoFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.VideoGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VideoFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VideoFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.VideoGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.VideoGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.VideoFindUniqueArgs, TData = Prisma.VideoGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.VideoFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.VideoGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.VideoFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.VideoFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.VideoGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.VideoGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.VideoUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.VideoUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.VideoUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.VideoGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.VideoGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.VideoUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.VideoUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.VideoGetPayload<T>, Context>) => Promise<Prisma.VideoGetPayload<T>>
            };

    };
}
