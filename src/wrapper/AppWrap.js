import React from 'react'
import {NavigationDots, SocialMedia} from '../components'
//higher order component, componentes reutilizables que estan en varias vistas como 
//los importados arriba
//Los parametros permiten pasar datos de manera dinamica para poder ser reutiliz
// lo que hace esta funcion es agarrar una seccion(component) y wrapearla en este container
// junto a los componentes que apareceran en todos estos componentes
const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id= {idName} className={`app__container ${classNames}`}>
        <SocialMedia/>
        <div className="app__wrapper app__flex">
            <Component/>
        </div>
        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap