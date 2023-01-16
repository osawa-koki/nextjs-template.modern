FROM node:18

WORKDIR /app

# パッケージはほとんどインストールされているので、早い段階でレイヤを構築
COPY package.json package-lock.json ./
RUN yarn install

# ホストのソースコードをコンテナにコピー
COPY . .
RUN yarn build

VOLUME [ "/app/dist" ]

CMD [ "tail", "-f", "/dev/null" ]
