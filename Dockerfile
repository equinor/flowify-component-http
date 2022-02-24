FROM node:16-alpine
LABEL org.opencontainers.image.source = "https://github.com/equinor/flowify-component-http"
WORKDIR /app

COPY package*.json ./
RUN npm install --production 
COPY ./src ./src
ENV SAVE_PATH=/tmp/flowify
ENV SAVE_FILE=${SAVE_PATH}/output.json
RUN mkdir -p ${SAVE_PATH}
RUN chown -R 1000:1000 ${SAVE_PATH}
USER 1000
ENTRYPOINT ["npm", "start"]