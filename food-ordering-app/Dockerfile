FROM node:alpine

RUN npm install -g @angular/cli

ADD ./ /food-ordering-app/

WORKDIR /food-ordering-app/

RUN yarn install
