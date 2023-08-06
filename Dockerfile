FROM golang:1.20 AS production

WORKDIR /app
RUN apt update

COPY . .
RUN go build -o main

ENTRYPOINT ["/app/main"]


FROM golang:1.20 AS develop

WORKDIR /app
RUN apt update

RUN go install github.com/cosmtrek/air@latest

CMD ["air", "-c", ".air.toml"]
