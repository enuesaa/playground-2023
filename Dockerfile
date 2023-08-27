FROM golang:1.21

WORKDIR /workspace
COPY . .
RUN go install github.com/cosmtrek/air@latest
RUN go install -v golang.org/x/tools/gopls@latest

# install wasm pack

CMD ["air", "-c", ".air.toml"]
