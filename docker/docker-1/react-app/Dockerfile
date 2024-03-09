FROM node:alpine
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV BASE_URL=$BASE_URL
RUN echo $BASE_URL
EXPOSE 3000
CMD [ "npm" ,"start"]