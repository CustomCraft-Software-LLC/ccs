#!/bin/bash

# Navigate to the project root directory
cd ./ || { echo "Failed to navigate to the project root directory"; exit 1; }

# Remove all dist folders in each package
echo "Removing all 'dist' folders..."
find packages -name "dist" -type d -exec rm -rf {} + || { echo "Error removing 'dist' folders"; exit 1; }

# Remove other specific folders if necessary
echo "Removing '__tests__' folders..."
find packages -name "__tests__" -type d -exec rm -rf {} + || { echo "Error removing '__tests__' folders"; exit 1; }

echo "Removing 'node_modules' folders..."
find packages -name "node_modules" -type d -exec rm -rf {} + || { echo "Error removing 'node_modules' folders"; exit 1; }

# Remove specific unused files
echo "Removing specific unused files..."
declare -a files=("CHANGELOG.md" "*.map" "jsxToTsx.sh" ".babelrc" ".eslintrc")

for file in "${files[@]}"; do
    find packages -name "$file" -exec rm -f {} + || { echo "Error removing files matching '$file'"; exit 1; }
done

echo "Cleanup completed!"