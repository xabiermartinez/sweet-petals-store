FROM node:14-alpine
ENV NODE_ENV development

WORKDIR /app/

COPY package.json .
RUN yarn install

COPY . .

EXPOSE 3000
