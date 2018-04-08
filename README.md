## Simple Node Server with Docker

```
$ git clone git@github.com:resin-projects/simple-server-node.git
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