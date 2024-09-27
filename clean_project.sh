#!/bin/bash

# Navigate to the project root directory
cd ./ || exit

# Remove all dist folders in each package
find packages -name "dist" -type d -exec rm -rf {} +

# Remove other specific folders if necessary
find packages -name "__tests__" -type d -exec rm -rf {} +
find packages -name "node_modules" -type d -exec rm -rf {} +

# Remove specific unused files
find packages -name "CHANGELOG.md" -exec rm -f {} +
find packages -name "*.map" -exec rm -f {} +
find packages -name "jsxToTsx.sh" -exec rm -f {} +
find packages -name ".babelrc" -exec rm -f {} +
find packages -name ".eslintrc" -exec rm -f {} +

echo "Cleanup completed!"