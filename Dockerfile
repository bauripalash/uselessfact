FROM denoland/deno:1.17.1
EXPOSE 8080
WORKDIR /uselessfact
USER deno
RUN deno cache main.ts
RUN mkdir -p /var/tmp/log
CMD ["run", "--allow-all", "main.ts"]
