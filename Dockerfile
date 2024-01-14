FROM node:18.15.0 AS app-build

WORKDIR /home/node/app

COPY package.json package-lock.json ./

RUN npm ci && chown -R node:node node_modules


FROM node:18.15.0 AS app-development

WORKDIR /home/node/app

COPY --from=app-build /home/node/app/node_modules ./node_modules

COPY . .

CMD npm run dev


FROM node:18.15.0 AS app

ENV NODE_ENV="production"

WORKDIR /home/node/app

COPY --from=app-build /home/node/app/node_modules ./node_modules

COPY . .

CMD npm run start
