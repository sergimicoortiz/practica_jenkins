#!/bin/sh
COMMIT_MSG="Pipeline ejecutada por $1. Motivo: $2"
ssh-keyscan -t rsa github.com > ~/.ssh/known_hosts
git config --global user.name "Auto commit"
git config --global user.email "sergimicoortiz@gmail.com"
git add .
git commit -m "$COMMIT_MSG"
git push origin HEAD:master
exit 0
