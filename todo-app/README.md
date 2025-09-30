# Todo App

Deploy:

```bash
kubectl apply -f manifests
```

### Ingress & persistent volume

(You can skip these steps if already done.)

Create a directory for persistent volume:

```bash
docker exec k3d-k3s-default-agent-0 mkdir -p /tmp/kube
```

Set permissions:

```bash
docker exec k3d-k3s-default-agent-0 chown 1000:1000 /tmp/kube
```

Set up shared ingress & persistent volume:

```bash
cd .. && kubectl apply -f manifests
```

### Run

App runs in: `http://localhost:8081/html`
