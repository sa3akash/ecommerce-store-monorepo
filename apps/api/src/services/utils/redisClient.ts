import { config } from '@/config';
import { createClient, RedisClientType } from 'redis';



class RedisClient {
  public client: RedisClientType;
  constructor(){
    this.client = createClient({url:config.REDIS_URL!});
    this.connect()
  }

  public async deleteCache(listCacheKey:string){
    const keys = await this.client.keys(listCacheKey);
    if (keys.length > 0) {
        await this.client.del(keys);
    }
  }

  private async connect(){
    this.client.on('error', (err) => console.log('Redis Client Error', err));
    this.client.connect()
  }
}

export const redisClient:RedisClient = new RedisClient()



