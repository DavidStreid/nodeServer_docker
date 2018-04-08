FROM node:6

# Defines our working directory in container
WORKDIR /usr/src/app

# Copies the package.json first for better cache on later pushes
COPY package.json package.json

# RUN JOBS=MAX npm install --production --unsafe-perm && npm cache clean && rm -rf /tmp/*
RUN JOBS=MAX npm install && npm cache clean && rm -rf /tmp/*

COPY . ./

ENV INITSYSTEM on

CMD ["npm", "start"]
