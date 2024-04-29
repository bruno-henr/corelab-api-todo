FROM node

WORKDIR /usr/app

COPY package*.json ./
RUN yarn

COPY . .
RUN yarn prisma generate

EXPOSE 3003
CMD ["yarn", "dev"]