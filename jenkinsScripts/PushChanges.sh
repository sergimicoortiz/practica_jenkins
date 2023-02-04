#!/bin/sh
COMMIT_MSG="Pipeline ejecutada por $1. Motivo: $2"
git config --global user.name "Auto commit"
git config --global user.email "sergimicoortiz@gmail.com"
# git add .
# git commit -m "$COMMIT_MSG"
# git push origin master
git remote
git branch -a
git status
exit 0