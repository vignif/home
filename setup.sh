#!/bin/bash

# Exit on error
set -e

# Ensure we are in the correct directory
cd /app

# Print available Gatsby CLI version to debug
echo "Using Gatsby version: $(gatsby --version)"

# Ensure Gatsby is installed locally
if ! yarn list --pattern "gatsby@" >/dev/null; then
    echo "Gatsby is missing in node_modules! Installing locally..."
    yarn add gatsby
    yarn add babel-eslint@10.1.0 --dev

fi

# Serve the Gatsby site
exec gatsby develop -H 0.0.0.0
