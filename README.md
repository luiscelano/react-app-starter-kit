# react-app-starter-kit

Este proyecto contiene todo lo necesario para construir una aplicación con React y Redux.

## Technology Stack

* React 18
* Redux
* react-router
* @redux-toolkit
* axios
* styled-components

## [React](http://es.react.dev)

Crea interfaces de usuario a partir de componentes. React te permite construir interfaces de usuario a partir de piezas individuales llamadas componentes.

```
function MyComponent() {
    return (
        <div>Hello World!</div>
    );
}
```

### Pasar Props a Componentes
Los componentes de React utilizan props para comunicarse entre sí. Cada componente padre puede enviar información a sus componentes hijos mediante el uso de props.

```jsx
function MyComponent1() {
    return (
        <MyComponent2 message="Hello World!" />
    );
}

function MyComponent2(props) {
    return (
        <span>{props.message}</span>
    );
}
```

## [Redux](https://es.redux.js.org)
Redux es un contenedor predecible del estado de aplicaciones JavaScript.

Te ayuda a escribir aplicaciones que se comportan de manera consistente, corren en distintos ambientes (cliente, servidor y nativo), y son fáciles de probar.

[Curso redux](https://app.egghead.io/playlists/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)

### Por qué usar Redux?
Redux te permite acceder al estado de una variable y modificar su estado desde cualquier parte.

### Ejemplo de jerarquía de componentes
[hierarchy image here]

### Solución del ejemplo usando Redux
[redux state management]


### Cómo funciona
[redux lifecycle]

## Platform Structure
Para que los componentes sean reutilizados, no hay necesidad de llamarlos de nuevo, existen formas de hacer que un componente se renderice en múltiples componentes sin volverlos a llamar.

Un buen caso de uso es para la orientación de la aplicación:

### App Layout
[app layout image here]

### High Order Components
Son funciones que nos permiten encapsular nuestros componentes asignandole propiedades.

```jsx
// El componente que recibirá propiedades a base de un encapsulamiento
function MyComponent(props) {
    return(
        <span>{props.message}</span>
    );
}

// HOC que encapsula MyComponet asignandole propiedades
function componentWrapper(Component) {
    const message = "Hello World!";
    return <Component message={message} />
}

export default componentWrapper(MyComponent)
```

### Utilizando HOC para manejo de propiedades
[hoc image here]