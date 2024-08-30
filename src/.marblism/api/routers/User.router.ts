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

        createMany: procedure.input($Schema.UserInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.createMany(input as any))),

        create: procedure.input($Schema.UserInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.create(input as any))),

        deleteMany: procedure.input($Schema.UserInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.deleteMany(input as any))),

        delete: procedure.input($Schema.UserInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.delete(input as any))),

        findFirst: procedure.input($Schema.UserInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).user.findFirst(input as any))),

        findMany: procedure.input($Schema.UserInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).user.findMany(input as any))),

        findUnique: procedure.input($Schema.UserInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).user.findUnique(input as any))),

        updateMany: procedure.input($Schema.UserInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.updateMany(input as any))),

        update: procedure.input($Schema.UserInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).user.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.UserCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.UserCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserGetPayload<T>, Context>) => Promise<Prisma.UserGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.UserDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.UserDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserGetPayload<T>, Context>) => Promise<Prisma.UserGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.UserFindFirstArgs, TData = Prisma.UserGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.UserFindManyArgs, TData = Array<Prisma.UserGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.UserGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.UserGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.UserGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.UserFindUniqueArgs, TData = Prisma.UserGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.UserUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.UserUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserGetPayload<T>, Context>) => Promise<Prisma.UserGetPayload<T>>
            };

    };
}
