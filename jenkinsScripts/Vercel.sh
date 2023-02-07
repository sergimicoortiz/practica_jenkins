#!/bin/sh
npx vercel link -t "$1" -p "$2" -y
npx vercel deploy ./build/
echo "Vercel OK"
