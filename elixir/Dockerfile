FROM elixir:1.14.3

RUN groupadd -g 1000 devel
RUN useradd -u 1000 -g 1000 -m devel

COPY --chown=devel:devel . /workdir
USER devel
WORKDIR /workdir
RUN mix local.hex --force
