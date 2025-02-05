FROM node:22-alpine AS base
WORKDIR /usr/src/app

# install dependencies into temp directory
FROM base AS install

RUN mkdir -p /temp/dev
COPY package.json package-lock.json /temp/dev/
COPY apps/api/package.json /temp/dev/apps/api/
RUN cd /temp/dev && npm ci

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json package-lock.json /temp/prod/
COPY apps/api/package.json /temp/prod/apps/api/
RUN cd /temp/prod && npm ci --only=production

# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# [optional] tests & build
ENV NODE_ENV=production
# RUN bun test
# RUN cd /usr/src/app/apps/api && npm run build
RUN npm run build --workspace=apps/api

# copy production dependencies and source code into final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/apps/api/dist ./dist
COPY --from=prerelease /usr/src/app/apps/api/package.json ./

# Set a non-root user for security
USER node
# run the app
EXPOSE 5500/tcp

CMD ["node", "dist/app.js"]
