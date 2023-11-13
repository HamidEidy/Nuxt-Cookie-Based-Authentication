// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/auth/login': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/login.post').default>>>>
    }
    '/api/auth/logout': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/logout.post').default>>>>
    }
    '/api/auth/me': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/me.get').default>>>>
    }
    '/api/auth/register': {
      'post': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/auth/register.post').default>>>>
    }
    '/api/posts': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/posts.get').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
  }
}
export {}