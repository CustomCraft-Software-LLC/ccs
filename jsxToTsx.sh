#!/bin/bash

find . -type f -name "*.jsx" -exec sh -c 'mv "$1" "${1%.jsx}.tsx"' sh {} \;