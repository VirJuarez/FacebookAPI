# FacebookAPI

Para comenzar, ejecuta `npm install` para instalar las dependencias y `npm start` para levantar el proyecto. El servidor se levantará en el puerto 3000.

Para poder efectuar las llamadas, será necesario agregar un archivo .env con la variable "ACCESS_TOKEN". Este token debe ser el user Token de un usuario de facebook, eso permitirá hacer las llamadas que devolverán información sobre dicho usuario.

### Endpoint: `/facebook/info`

#### Descripción:
Este endpoint devuelve información básica del perfil de Facebook del usuario autenticado, incluyendo el nombre, correo electrónico, fecha de nacimiento, género y cantidad de amigos.

#### Método: `GET`

#### Parámetros de consulta:
N/A

#### Respuestas:
- **200 OK**: La solicitud se realizó con éxito.
  - Tipo de contenido: `application/json`
  - Cuerpo de respuesta:
    ```json
    {
      "name": "Nombre del usuario",
      "email": "correo@electronico.com",
      "birthday": "1990-01-01",
      "gender": "female",
      "friends": 500
    }
    ```
- **500 Internal Server Error**: Se produjo un error interno del servidor al procesar la solicitud.

### Endpoint: `/facebook/posts`

#### Descripción:
Este endpoint devuelve las publicaciones del perfil de Facebook del usuario autenticado.

#### Método: `GET`

#### Parámetros de consulta:
- `since` (opcional): Fecha de inicio para filtrar las publicaciones (formato: DD-MM-YYYY).
- `until` (opcional): Fecha de fin para filtrar las publicaciones (formato: DD-MM-YYYY).
- `limit` (opcional): Número máximo de publicaciones a devolver (predeterminado: 20).

#### Respuestas:
- **200 OK**: La solicitud se realizó con éxito.
  - Tipo de contenido: `application/json`
  - Cuerpo de respuesta: Array de objetos de publicaciones.
- **500 Internal Server Error**: Se produjo un error interno del servidor al procesar la solicitud.

### Endpoint: `/facebook/likes`

#### Descripción:
Este endpoint devuelve las páginas de Facebook a las que un usuario ha dado "Me gusta". Como máximose mostrarán 100 resultados.

#### Método: `GET`

#### Parámetros de consulta:
- `followers` (opcional): Filtrar las páginas por el número mínimo de seguidores.

#### Respuestas:
- **200 OK**: La solicitud se realizó con éxito.
  - Tipo de contenido: `application/json`
  - Cuerpo de respuesta: Array de objetos de páginas que le gustan al usuario.
- **500 Internal Server Error**: Se produjo un error interno del servidor al procesar la solicitud.

### Endpoint: `/facebook/photos`

#### Descripción:
Este endpoint devuelve las fotos del perfil de Facebook del usuario autenticado. Como máximose mostrarán 100 resultados.

#### Método: `GET`

#### Parámetros de consulta:
- `album` (opcional): Filtrar las fotos por el nombre del álbum (búsqueda insensible a mayúsculas y minúsculas).

#### Respuestas:
- **200 OK**: La solicitud se realizó con éxito.
  - Tipo de contenido: `application/json`
  - Cuerpo de respuesta: Array de objetos de fotos del perfil.
- **500 Internal Server Error**: Se produjo un error interno del servidor al procesar la solicitud.

### Ejemplos:

- https://docs.google.com/document/d/1Mb6Q7vaVMGugWYAWAqOHuK7VObu4VYFriUk86pwqwNU/edit?usp=sharing
