FROM node:latest
# where our app will live in the container
WORKDIR /usr/src/app
# copy both package.json files --> install dependencies
COPY package*.json ./

RUN npm install
# copy everything else over
COPY . .

EXPOSE 3000

CMD ["npm","start"]
