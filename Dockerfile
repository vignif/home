FROM node:20.16.0-slim

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    && rm -rf /var/lib/apt/lists/*

# Install Gatsby CLI globally
RUN npm install -g gatsby-cli

# Copy dependency files first for caching
COPY package.json yarn.lock ./

# Install dependencies (use frozen-lockfile for reproducibility)
RUN yarn install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Copy setup script and make it executable
COPY setup.sh /usr/local/bin/setup.sh
RUN chmod +x /usr/local/bin/setup.sh

# Expose Gatsby dev server port
EXPOSE 8000

# Start Gatsby via your setup script
CMD ["/usr/local/bin/setup.sh"]
