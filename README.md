# Preguntas Teóricas
### 1. ¿Qué es un High Order Component (HOC) en React y cuál es su propósito principal en la construcción de componentes?

Un componente de orden superior (HOC) es una función que recibe como parámetro un componente y devuelve un nuevo componente. Su propósito principal en la construcción de componentes es el reuso de la lógica de componentes.

### 2. ¿Cuál es la ventaja de utilizar Render Props en lugar de HOCs o componentes de clase para compartir lógica en React? Proporciona un ejemplo de uso de Render Props.

El término “render prop” se refiere a una técnica para compartir código entre componentes en React utilizando una propiedad cuyo valor es una función. La principal ventaja de utilizar Render Props en lugar de HOCs o componentes de clase es la mayor simplicidad y capacidad de personalización que ofrecen.

Ejemplo:
Supongamos que tienes un componente Counter que muestra un contador y deseas compartir la lógica del contador con otros componentes.

```
import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
      </div>
    );
  }
}

export default Counter;
```

En este ejemplo, el componente Counter acepta una función render como prop y la llama pasando el estado del contador y una función para incrementar el contador. Esto permite que otros componentes utilicen la lógica del contador de manera personalizada.

### 3. En la práctica, ¿cuáles son las diferencias clave entre el patrón HOC y el patrón Render Props en cuanto a su implementación y cuándo se prefiere uno sobre el otro?

En la práctica, tanto el patrón High Order Component (HOC) como el patrón Render Props son útiles para compartir lógica entre componentes en React, pero tienen diferencias clave en su implementación y se prefieren en situaciones diferentes.

* HOC (High Order Component): Útil para compartir lógica general y reutilizable en múltiples componentes. Implementación más abstracta. Bueno para tareas como autenticación, control de acceso y gestión de estado global.

* Render Props: Ideal cuando deseas proporcionar funcionalidad específica y personalizable a un componente. Implica pasar una función como prop. Más flexible y adecuado para casos de uso concretos y personalizados.

La elección depende de la necesidad específica y la reutilización deseada.

### 4. ¿Cómo puedes evitar problemas comunes relacionados con la renderización innecesaria al utilizar HOCs o Render Props en React? Menciona algunas técnicas para mejorar el rendimiento.

Algunas de las técnicas para mejorar el rendimiento pueden ser:

* Memorización de componentes.
* Evitar la creación excesiva de funciones.
* Paso de props necesarios.
* Optimización de HOCs.
* Revisión del ciclo de vida.
* Uso del contexto de React.
* Evitar anidación excesiva.
* Pruebas de rendimiento.
* Ejercicio Práctico

### 5. Ejercicio de Composición de Componentes:

* Diseña dos componentes funcionales en React: Toggle y Tooltip.
* El componente Toggle debe ser capaz de alternar entre mostrar y ocultar su contenido al hacer clic en él. Debería aceptar children como prop y renderizarlo cuando esté visible.
* El componente Tooltip debe envolver a otro componente y mostrar un mensaje de información cuando el usuario pase el cursor sobre él.
* Implementa Toggle y Tooltip utilizando tanto HOC como Render Props para componer su funcionalidad adicional.
Crea un tercer componente llamado App que utilice tanto Toggle como Tooltip para demostrar cómo puedes componer estos componentes de diferentes maneras.


