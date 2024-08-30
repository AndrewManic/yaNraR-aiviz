import { createRouter } from '@/.marblism/api/routers'
import { Trpc } from '@/core/trpc/server'
import { AiRouter } from './routers/ai.router'
import { AuthenticationRouter } from './routers/authentication.router'
import { ConfigurationRouter } from './routers/configuration.router'
import { UploadRouter } from './routers/upload.router'

import { RagRouter } from './routers/rag.router'

const appRouter = Trpc.mergeRouters(
  createRouter(Trpc.createRouter, Trpc.procedurePublic), // The generated tRPC router for all your models

  // the custom router, add your own routers here
  Trpc.createRouter({
    ai: AiRouter,
    authentication: AuthenticationRouter,

    configuration: ConfigurationRouter,
    upload: UploadRouter,

    rag: RagRouter,
  }),
)

export type AppRouter = typeof appRouter

export const Server = {
  appRouter,
}
