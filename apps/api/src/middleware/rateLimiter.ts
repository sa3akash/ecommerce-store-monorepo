import { redisClient } from '@/services/utils/redisClient';
import { ServerError } from 'error-express';
import { NextFunction, Request, Response } from 'express';
import { rateLimit } from 'express-rate-limit';
import { RedisStore } from 'rate-limit-redis';

export const routeRateLimiter = (limit = 20, windowMs = 60000) => {
  return rateLimit({
    windowMs: windowMs,
    limit: limit,
    standardHeaders: true,
    // statusCode: 429,
    // message: 'Too many requests.',
    legacyHeaders: false,
    handler: () => {
      throw new ServerError('Too many requests.', 429);
    },
    store: new RedisStore({
      sendCommand: (...args: string[]) => redisClient.client.sendCommand(args),
      prefix: 'redis-rate-limit'
    })
  });
};

export function RateLimitCustom(limit = 20, windowMs = 60000): MethodDecorator {
  const limiter = rateLimit({
    windowMs,
    max: limit,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req: Request, res: Response) => {
      throw new ServerError('Too many requests.', 429);
    },
    store: new RedisStore({
      sendCommand: (...args: string[]) => redisClient.client.sendCommand(args),
      prefix: 'redis-rate-limit-custom'
    })
  });

  return (_target, _key, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]): Promise<any> {
      const [req, res, next] = args as [Request, Response, NextFunction];

      // Call the limiter
      limiter(req, res, (err: any) => {
        if (err) {
          return next(err); // Go to the next middleware with the error
        }
        return originalMethod.apply(this, args); // Call the original method
      });
    };

    return descriptor;
  };
}
