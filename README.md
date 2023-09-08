# react-app-starter-kit

Este proyecto contiene todo lo necesario para construir una aplicación con React y Redux.

## Technology Stack

- [React 18](https://es.react.dev)
- [Redux](https://es.redux.js.org)
- [react-router](https://reactrouter.com/)
- [@redux-toolkit](https://redux-toolkit.js.org/)
- [axios](https://axios-http.com/)
- [styled-components](https://styled-components.com/)

## Cómo instalarlo

Es necesario tener instalado [node](https://nodejs.org/es/download) primero

abre la consóla de comandos y asegurate de estar en el directorio del proyecto `react-app-starter-kit`

instalar los paquetes:

```
npm install
```

correr el proyecto(modo desarrollo):

```
npm run start:dev
```

correr el proyecto(modo producción):

```
npm run start:prod
```

## React

Crea interfaces de usuario a partir de componentes. React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes.

```jsx
function MyComponent() {
  return <div>Hello World!</div>
}
```

### Pasar Props a Componentes

Los componentes de React utilizan props para comunicarse entre sí. Cada componente padre puede enviar información a sus componentes hijos mediante el uso de props.

```jsx
function MyComponent1() {
  return <MyComponent2 message="Hello World!" />
}

function MyComponent2(props) {
  return <span>{props.message}</span>
}
```

## Redux

Redux es un contenedor predecible del estado de aplicaciones JavaScript.

Te ayuda a escribir aplicaciones que se comportan de manera consistente, corren en distintos ambientes (cliente, servidor y nativo), y son fáciles de probar.

[Curso redux](https://app.egghead.io/playlists/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)

### Por qué usar Redux?

Redux te permite acceder al estado de una variable y modificar su estado desde cualquier parte.

### Ejemplo de jerarquía de componentes

![image](https://github.com/luiscelano/react-resources/assets/57637647/3d8dfc33-e28a-4303-9122-9d611f262477)

### Solución del ejemplo usando Redux

![image](https://github.com/luiscelano/react-resources/assets/57637647/961e12ae-6b56-4d96-ad42-ffcfcebfba8e)

### Cómo funciona

![image](https://github.com/luiscelano/react-resources/assets/57637647/8fde01a8-230a-48be-b0e3-d9fa68e6d427)

## Platform Structure

Para que los componentes sean reutilizados, no hay necesidad de llamarlos de nuevo, existen formas de hacer que un componente se renderice en múltiples componentes sin volverlos a llamar.

Un buen caso de uso es para la orientación de la aplicación:

### App Layout

![image](https://github.com/luiscelano/react-resources/assets/57637647/41249387-464f-4289-9af2-4c24004b7d25)

### High Order Components

Son funciones que nos permiten encapsular nuestros componentes asignandole propiedades.

```jsx
// El componente que recibirá propiedades a base de un encapsulamiento
function MyComponent(props) {
  return <span>{props.message}</span>
}

// HOC que encapsula MyComponet asignandole propiedades
function componentWrapper(Component) {
  const message = 'Hello World!'
  return <Component message={message} />
}

export default componentWrapper(MyComponent)
```

### Utilizando HOC para manejo de propiedades

![image](https://github.com/luiscelano/react-resources/assets/57637647/910883ca-1df1-4fbd-a446-33fdaab9609a)

### Manejo de los componentes y sus estilos

El módulo de styles puede ser manejado con archivos css o utilizando la librería `styled-components`.

**styles.js**

```js
import styled from 'styled-components'

const Container = styled.div`
  background-color: red;
`
```

**index.jsx**

```jsx
import React from 'react'
import * as styles from './styles'

function MyComponent() {
  return (
    <styles.Container>
      <span>Hello World!</span>
    </styles.Container>
  )
}

export default MyComponent
```

![image](https://github.com/luiscelano/react-resources/assets/57637647/63e342bc-95dd-42b8-b1b6-b76efe08509d)
