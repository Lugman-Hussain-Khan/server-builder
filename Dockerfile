FROM alpine:3.14

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

RUN apk add npm && \
    npm install && \
    npx prisma generate

COPY . .

CMD ["node", "index"]