import { Request } from 'express';

export const generateCacheKey = (req: Request) => {
  // const baseUrl = req.path.replace(/^\/+|\/+$/g, '').replace(/\//g, ':');
  const baseUrl = req.originalUrl.replace(/^\/+|\/+$/g, '').replace(/\//g, ':');

  const params = req.query;
  const sortedParams = Object.keys(params)
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join('&');

  return sortedParams ? `${baseUrl}:${sortedParams}` : baseUrl;
};
