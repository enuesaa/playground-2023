# consul-minikube
hashicorp consul を minikube 上で動かしてみる

## Consul
サービスメッシュらしい。kv store があるらしいが用途はなんなのだろう。

## helm
kubernetes のパッケージマネージャらしい。yum でいう repository に近そう

## Links
- https://zenn.dev/amtkxa/articles/16f44f0a9d711171dc3a

## Commands
### Install 2 Kubernetes Cluster
```bash
helm install -f config.yaml hashicorp hashicorp/consul
```
### ダッシュボードを起動
```bash
minikube dashboard
```
