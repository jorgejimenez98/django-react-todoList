# django-react-todoList
Un todo-list básico realizado con django en el backend y react en el frontend

![Alt text](frontend/public/example.png?raw=true "Ejemplo")

## Iniciar backend

Lo primero que se debe hacer es clonar el repositorio con los siguentes comandos:

```sh
$ git clone https://github.com/jorgejimenez98/django-react-todoList.git
$ cd nombre-carpeta-donde-estara-el-proyecto
```

Crear un entorno virtual para instalar las dependencias y correr el proyecto, primero abrir el cmd en el directorio del <nombre-carpeta-donde-estara-el-proyecto> y escribir:
``
```sh
$ py -m venv nombre-env
$ cd nombre-env/Scripts/
$ activate
```

Entonces instalas las dependencias que estan en el txt con el siguiente comando:

```sh
(nombre-env)$ pip install -r requirements.txt
```
Notar que `(nombre-env)` delante del comando indica solamente que la terminal tiene activado el entorno virtual.

Una vez que se hallan instalado las dependencias haz lo siguiente:
```sh
(nombre-env)$ cd backend
(nombre-env)$ python manage.py runserver
```
Y navega a la url `http://127.0.0.1:8000/api/` en caso de que quieras consultar la api del sistema
  
## Iniciar frontend

Dirigirse a la carpeta de frontend e instalar las dependencias con los comandos: 

```sh
$ cd frontend/
$ npm install --save
```

Correr el frontend:
``
```sh
$ npm start
```
  
Y navega a la url `http://127.0.0.1:3000` que es donde correrá la aplicación
