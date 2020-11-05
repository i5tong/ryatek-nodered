# ryatek-nodered
Node-Red 自定义节点

## Used

#### 方式一
Enter node-red container. Then copy html and js file
```bash
$ docker exec -it node-red sh
$ cp custom.html /node_modules/@node-red/nodes
$ cp custom.js /node_modules/@node-red/nodes
```

#### 方式二
npm install
```bash
$ docker ps
$ docker exec -it node-red sh 
$ npm i node-red-contrib-ryatek
$ exit
$ docker restart node-red
```
