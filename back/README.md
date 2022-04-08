## API - Transformação Digital

### 📝 Documentação 


#### Autenticação

<b style="color:#198754;">POST</b> - Login

```bash
http://api-transformacao-digitalherokuapp.com/login
```

##### Headers
###### Content-Type: application/json
<hr>

##### Body

```bash
{
  "emailUsuario": "joao-gomes@gmail.com",
  "senhaUsuario": "40028922"
}
```

##### Exemplo - Requisição

```bash
const fetch = require('node-fetch');

fetch("http://api-transformacao-digital.herokuapp.com/login", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  "body": {
    "emailUsuario": "joao-gomes@gmail.com",
    "senhaUsuario": "40028922"
  }
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

#### Categorias

<b style="color:#6610f2;">GET</b> - Listagem de Categoria

```bash
http://api-transformacao-digital.herokuapp.com/categoria/34
```

<hr>

##### Exemplo - Requisição

```bash
const fetch = require('node-fetch');

fetch("http://api-transformacao-digital.herokuapp.com/categoria/34", {
  "method": "GET"
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

<b style="color:#6610f2;">GET</b> - Listagem de Categorias

```bash
http://api-transformacao-digital.herokuapp.com/categoria
```

<hr>

##### Exemplo - Requisição

```bash
const fetch = require('node-fetch');

fetch("http://api-transformacao-digital.herokuapp.com/categoria", {
  "method": "GET"
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

<b style="color:#198754;">POST</b> - Postagem de Categoria

```bash
http://api-transformacao-digital.herokuapp.com/categoria
```

##### Headers
###### Content-Type: application/json
###### Authorization

```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........
```
<hr>

##### Body

```bash
{
  "fotoCategoria": "https://img.freepik.com/vetores-gratis.png",
  "nomeCategoria": "Design",
  "descricaoCategoria": "................."
}
```

##### Exemplo - Requisição

```bash
const fetch = require('node-fetch');

fetch("http://api-transformacao-digital.herokuapp.com/categoria", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjEsImVtYWlsVXN1YXJpbyI6Im1hdGV1c0BnbWFpbC5jb20iLCJub21lVXN1YXJpbyI6Ik1hdGV1cyIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTY0ODUxMTI2Mn0.Dp6fc8IN97Ns1bV8N0oeQ4uLGdIZrG75fK3VGUqChFw"
  },
  "body": {
    "fotoCategoria": "https://img.freepik.com/vetores-gratis/pessoas-juntando-pecas-de-quebra-cabeca_52683-28610.jpg?t=st=1649148130~exp=1649148730~hmac=6f95a00355afd9e9e8f09ae84d5293e1ccc84b0efd2d8dfa57841ff6d7fa14c1&w=740",
    "nomeCategoria": "Design",
    "descricaoCategoria": "<p>....</p>"
  }
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

<b style="color:#fd7e14;">PUT</b> - Atualização de Categoria

```bash
http://api-transformacao-digital.herokuapp.com/categoria/74
```

##### Headers
###### Content-Type: application/json
###### Authorization

```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........
```
<hr>

##### Body

```bash
{
  "fotoCategoria": "https://img.freepik.com/vetores-gratis.png",
  "nomeCategoria": "Design",
  "descricaoCategoria": "................."
}
```

##### Exemplo - Requisição

```bash
const fetch = require('node-fetch');

const fetch = require('node-fetch');

fetch("http://api-transformacao-digital.herokuapp.com/categoria/74", {
  "method": "PUT",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjEsImVtYWlsVXN1YXJpbyI6Im1hdGV1c0BnbWFpbC5jb20iLCJub21lVXN1YXJpbyI6Ik1hdGV1cyIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTY0ODUxMTI2Mn0.Dp6fc8IN97Ns1bV8N0oeQ4uLGdIZrG75fK3VGUqChFw"
  },
  "body": {
    "fotoCategoria": "https://img.freepik.com/vetores-gratis/pessoas-juntando-pecas-de-quebra-cabeca_52683-28610.jpg?t=st=1649148130~exp=1649148730~hmac=6f95a00355afd9e9e8f09ae84d5293e1ccc84b0efd2d8dfa57841ff6d7fa14c1&w=740",
    "nomeCategoria": "Design",
    "descricaoCategoria": "<p>Atualizado</p>"
  }
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

<b style="color:#dc3545">DELETE</b> - Remoção de Categoria

```bash
http://api-transformacao-digital.herokuapp.com/categoria/74
```

##### Headers
###### Authorization

```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........
```
<hr>

##### Exemplo - Requisição

```bash
const fetch = require('node-fetch');

fetch("http://api-transformacao-digital.herokuapp.com/categoria/74", {
  "method": "DELETE",
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjEsImVtYWlsVXN1YXJpbyI6Im1hdGV1c0BnbWFpbC5jb20iLCJub21lVXN1YXJpbyI6Ik1hdGV1cyIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTY0ODUxMTI2Mn0.Dp6fc8IN97Ns1bV8N0oeQ4uLGdIZrG75fK3VGUqChFw"
  }
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
```


#### Categorias

<b style="color:#6610f2;">GET</b> - Listagem de Produto

```bash
http://api-transformacao-digital.herokuapp.com/produto/34
```

<hr>

##### Exemplo - Requisição

```bash
const fetch = require('node-fetch');

fetch("http://api-transformacao-digital.herokuapp.com/produto/34", {
  "method": "GET"
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

<b style="color:#6610f2;">GET</b> - Listagem de Produtos

```bash
http://api-transformacao-digital.herokuapp.com/produto
```

<hr>

##### Exemplo - Requisição

```bash
const fetch = require('node-fetch');

fetch("http://api-transformacao-digital.herokuapp.com/produto", {
  "method": "GET"
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

<b style="color:#198754;">POST</b> - Postagem de Produto

```bash
http://api-transformacao-digital.herokuapp.com/produto
```

##### Headers
###### Content-Type: application/json
###### Authorization

```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........
```
<hr>

##### Body

```bash
{
  "fotoProduto": "https://img.freepik.com/vetores-gratis.png",
  "nomeProduto": "Design",
  "descricaoProduto": "................."
}
```

##### Exemplo - Requisição

```bash
const fetch = require('node-fetch');

fetch("http://api-transformacao-digital.herokuapp.com/produto", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjEsImVtYWlsVXN1YXJpbyI6Im1hdGV1c0BnbWFpbC5jb20iLCJub21lVXN1YXJpbyI6Ik1hdGV1cyIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTY0ODUxMTI2Mn0.Dp6fc8IN97Ns1bV8N0oeQ4uLGdIZrG75fK3VGUqChFw"
  },
  "body": {
    "fotoProduto": "https://img.freepik.com/vetores-gratis/pessoas-juntando-pecas-de-quebra-cabeca_52683-28610.jpg?t=st=1649148130~exp=1649148730~hmac=6f95a00355afd9e9e8f09ae84d5293e1ccc84b0efd2d8dfa57841ff6d7fa14c1&w=740",
    "nomeProduto": "Design",
    "descricaoProduto": "<p>....</p>"
  }
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

<b style="color:#fd7e14;">PUT</b> - Atualização de Produto

```bash
http://api-transformacao-digital.herokuapp.com/produto/74
```

##### Headers
###### Content-Type: application/json
###### Authorization

```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........
```
<hr>

##### Body

```bash
{
  "fotoProduto": "https://img.freepik.com/vetores-gratis.png",
  "nomeProduto": "Design",
  "descricaoProduto": "................."
}
```

##### Exemplo - Requisição

```bash
const fetch = require('node-fetch');

fetch("http://api-transformacao-digital.herokuapp.com/produto/74", {
  "method": "PUT",
  "headers": {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjEsImVtYWlsVXN1YXJpbyI6Im1hdGV1c0BnbWFpbC5jb20iLCJub21lVXN1YXJpbyI6Ik1hdGV1cyIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTY0ODUxMTI2Mn0.Dp6fc8IN97Ns1bV8N0oeQ4uLGdIZrG75fK3VGUqChFw"
  },
  "body": {
    "fotoCategoria": "https://img.freepik.com/vetores-gratis/pessoas-juntando-pecas-de-quebra-cabeca_52683-28610.jpg?t=st=1649148130~exp=1649148730~hmac=6f95a00355afd9e9e8f09ae84d5293e1ccc84b0efd2d8dfa57841ff6d7fa14c1&w=740",
    "nomeCategoria": "Design",
    "descricaoCategoria": "<p>Atualizado</p>"
  }
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
```

<b style="color:#dc3545">DELETE</b> - Remoção de Produto

```bash
http://api-transformacao-digital.herokuapp.com/produto/74
```

##### Headers
###### Authorization

```bash
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........
```
<hr>

##### Exemplo - Requisição

```bash
const fetch = require('node-fetch');

fetch("http://api-transformacao-digital.herokuapp.com/produto/74", {
  "method": "DELETE",
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzdWFyaW8iOjEsImVtYWlsVXN1YXJpbyI6Im1hdGV1c0BnbWFpbC5jb20iLCJub21lVXN1YXJpbyI6Ik1hdGV1cyIsInVzZXJUeXBlIjoidXNlciIsImlhdCI6MTY0ODUxMTI2Mn0.Dp6fc8IN97Ns1bV8N0oeQ4uLGdIZrG75fK3VGUqChFw"
  }
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
```