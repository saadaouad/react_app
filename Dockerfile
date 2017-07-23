FROM node:7.10
MAINTAINER Saad Aouad

RUN npm install webpack -g


WORKDIR /var/www
COPY package.json /var/www
RUN npm cache clean && npm config set registry http://registry.npmjs.org/ && npm install --silent --progress=false

COPY . /var/www/

# RUN webpack

CMD ["npm", "start"]
