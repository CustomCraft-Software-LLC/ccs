#!/bin/bash

# Print the current working directory
echo "Current directory: $(pwd)"

# Path to the file to check
FILE_PATH="./examples/index.ts"

# Check if the file exists
if [ -f "$FILE_PATH" ]; then
  echo "File exists: $FILE_PATH"
else
  echo "File does not exist: $FILE_PATH"
fi