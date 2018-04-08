## Simple Node Server with Docker

```
$ git clone https://github.com/DavidStreid/nodeServer_docker.git
$ npm install
```

For Dev
```
$ npm run-script startDev
```

For Prod
```
$ npm start
```

For Running with Docker
```
$ docker build -t dockernode:v1 .
$ docker run -it dockernode:v1
```