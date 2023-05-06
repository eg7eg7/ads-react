FROM node:20.1.0-alpine3.17

RUN npm install -g yarn
WORKDIR /project
COPY . .
RUN yarn install && yarn build

CMD [ "" ]