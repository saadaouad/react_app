#!/bin/bash
set -e

if [ "$1" = 'ui' ]; then
 	npm start
fi
exec "$@"