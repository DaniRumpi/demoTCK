# demoTCK

## Requisitos
- Tener instalado [Node v6.10.3](https://nodejs.org/en/download/) o superior.
- Tener instalado [npm v3.10.10](https://nodejs.org/en/download/) o superior.

## Guia de Instalación

1. Desempaquetar el código en el directorio seleccionado.
2. Cuando haya terminado de desempaquetar, abrimos una terminal y descargamos los paquetes de npm y bower
```shel
~/directorio/seleccionado/demoTCK$ npm install
~/directorio/seleccionado/demoTCK$ bower intall
```
3. Una vez descargados todos lo paquetes veremos que se han creado dos directorios llamados _node-modules_ y _bower-components_.
4. De nuevo en la terminal escribimos:
```shel
~/directorio/seleccionado/demoTCK$ gulp serve
```
Esto levantará el servidor que brinda el frontal en el puerto **3000**.
5. En un navegador escribimos la url [http://localhost:3000](http://localhost:3000)
6. Comprobamos que se inicia la web y ya podremos interactuar con la ésta.
