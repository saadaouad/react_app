FROM obytes/gal-nodejs-7.0:latest

MAINTAINER Wael El Hachimi
ENV PORT=9000

COPY . /var/www
WORKDIR /var/www

# Install package.json
RUN npm install

EXPOSE ${PORT}

ENTRYPOINT ["npm", "start"]
