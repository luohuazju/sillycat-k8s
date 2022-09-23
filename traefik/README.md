There are two ways to configure the ingress.

I may choose IngressRoute since others are using IngressRouteTCP

Need to set up the label
```shell
kubectl label nodes centos7-master IngressProxy=true
node/centos7-master labeled
```