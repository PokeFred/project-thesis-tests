declare global {
    namespace App {
        interface Error { message: string }

        interface Platform {
            env: Env;
            ctx: ExecutionContext;
            caches: CacheStorage;
            cf?: IncomingRequestCfProperties
        }
    }
}

export {};
