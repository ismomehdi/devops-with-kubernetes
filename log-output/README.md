# Log Output

Deploy:

```bash
kubectl apply -f manifests
```

Set up shared ingress:

```bash
cd .. && kubectl apply -f ingress.yaml
```

App runs in: `http://localhost:8081/`
