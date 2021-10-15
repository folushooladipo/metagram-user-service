FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN rm -rf node_modules && yarn install --frozen-lockfile

# Bundle app source
COPY . .
RUN yarn build
EXPOSE 8081
CMD [ "npm", "run", "prod" ]
