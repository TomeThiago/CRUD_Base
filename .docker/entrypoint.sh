#!/bin/bash

if [! -f ".env" ]; then
  cp .env.example .env
fi

yarn install
yarn migration:run
yarn start:dev