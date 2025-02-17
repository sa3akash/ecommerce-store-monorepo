// external libraries
import mongoose from 'mongoose';
import { config } from '@/config';
// import { redisConnection } from '@services/cache/redis.connection';

const log = config.createLogger('MONGODB_CONNECTION_SETUP');

export default () => {
  const connect = () => {
    mongoose
      .connect(config.DATABASE_URL!)
      .then(() => {
        log.info('DB SUCCESSFULLY CONNECTED');
        // redisConnection.connection();
      })
      .catch((err) => {
        log.error(err.message);
        process.exit(1);
      });
  };
  connect();
  mongoose.connection.on('disconnected', connect);
};
