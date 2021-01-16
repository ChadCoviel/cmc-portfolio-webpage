# match version of node used for development and choose alpine for a lightweight image
FROM node:14.15.0-alpine3.12

LABEL maintainer="Chad Coviel (chadcoviel@gmail.com)"
USER root
WORKDIR /opt/app-root/src

# Copy program files into container
COPY . .

# Install version of angular cli used during development
RUN npm install -g @angular/cli
RUN npm install
RUN ng update @angular/cli @angular/core
RUN npm update @angular/material @angular/cdk
RUN npm install -g typescript@latest

EXPOSE 4200

# Run app
CMD ng serve --host 0.0.0.0 --disable-host-check