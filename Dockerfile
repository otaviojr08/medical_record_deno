FROM denoland/deno:2.1.9

WORKDIR /app

COPY . .

RUN deno cache deno.json

EXPOSE 8369

CMD ["deno", "run", "--allow-all", "src/server.ts"]
