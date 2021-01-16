#!/usr/bin/env bash
docker build -t cmc-portfolio-webpage:dev .
docker run -dit --name cmc-portfolio-webpage -p 4200:4200 cmc-portfolio-webpage:dev