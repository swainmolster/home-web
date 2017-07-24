FROM resin/rpi-raspbian:latest

WORKDIR src/

RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN apt-get -qy install nodejs \
                build-essential \
		ca-certificates

COPY ../package.json /src/package.json

RUN /bin/bash -c "npm i"

# Bundle app src
COPY . /src

EXPOSE 8080

CMD ["npm", "start"]
