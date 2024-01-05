FROM rust:1.68.2-bullseye

EXPOSE 3000

WORKDIR /app
COPY . .

RUN cargo install cargo-watch
RUN cargo build

CMD cargo watch -x run
