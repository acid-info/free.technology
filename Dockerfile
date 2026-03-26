FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:22-alpine AS runner

WORKDIR /app

# Listening port
ARG PORT=3000
EXPOSE ${PORT}

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD ["yarn", "start"]
