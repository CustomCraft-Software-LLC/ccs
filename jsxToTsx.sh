#!/bin/bash

find . -type f -name "*.jsx" -exec sh -c 'mv "$1" "${1%.jsx}.tsx"' sh {} \;

find . -type f -name "*.stories.js" -exec sh -c 'mv "$1" "${1%.stories.js}.stories.tsx"' sh {} \;