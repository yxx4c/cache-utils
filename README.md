# cache-utils

`cache-utils` is a versatile library designed to complement the [prisma-redis-cache](https://github.com/yxx4c/prisma-redis-cache) and [prisma-redis-uncache](https://github.com/yxx4c/prisma-redis-uncache) libraries. It offers general-purpose functions for efficient Redis/DragonflyDB database maintenance.

🚀 If `cache-utils` proves helpful, consider giving it a star! [⭐ Star Me!](https://github.com/yxx4c/cache-utils)

## Installation

#### Using npm:

```bash
npm install @yxx4c/cache-utils
```

#### Using yarn:

```bash
yarn add @yxx4c/cache-utils
```

#### Using pnpm:

```bash
pnpm add @yxx4c/cache-utils
```

#### Using bun:

```bash
bun add @yxx4c/cache-utils
```

## Example

```javascript
import { getCacheId, getCacheIdPattern } from '@yxx4c/cache-utils';

// ...Extend Prisma with prisma-redis-cache

// Query a user and cache the result with custom configuration
prismaWithCache.user.findUnique({
  where: { id },
  cache: { ttl: 5, key: getCacheId([{ prisma: 'User' }, { userId: id }]) },
});

// ...Extend Prisma with prisma-redis-uncache

// Example: Update a user and invalidate related cache keys
prismaWithUncache.user.update({
  where: { id },
  data: { username },
  uncache: {
    uncacheKeys: [
      getCacheId([{ prisma: 'User' }, { userId: id }]),
      getCacheIdPattern([{ prisma: '*' }, { userId: id }]), // Pattern matching under a specific key, eg: prisma:*:userId:1234
      getCacheIdPattern([{ prisma: 'Post' }, { userId: id }, { glob: '*' }]), // Utilizing the key 'glob' to create a wildcard region, eg: prisma:post:userId:1234:*
    ],
    hasPattern: true,
  },
});
```

Integrate `cache-utils` seamlessly with `prisma-redis-cache` and `prisma-redis-uncache` for comprehensive Redis/DragonflyDB database management. If you find value in this library, show your support by giving it a star on [GitHub](https://github.com/yxx4c/cache-utils).
