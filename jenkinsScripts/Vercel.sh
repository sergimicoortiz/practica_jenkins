#!/bin/sh
npx vercel link -t "$1" -p "$2" -y ./build/
npx vercel deploy -t "$1" ./build/
echo "Vercel OK"
