FROM node:16-alpine as builder
# Create app directory


COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

# The instructions for second stage
FROM node:16-alpine

WORKDIR /app
COPY --from=builder node_modules node_modules

COPY . .

EXPOSE 8080

CMD yarn start:prod