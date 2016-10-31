FROM obytes/gal-nodejs-7.0:latest

MAINTAINER Wael El Hachimi
ENV PORT=3333

COPY . /var/www
WORKDIR /var/www

# Install packages.json
RUN npm install

EXPOSE ${PORT}

ENTRYPOINT ["npm", "start"]
