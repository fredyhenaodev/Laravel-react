# Eventos sintéticos
React, con JSX, tiene una serie de eventos sintéticos que permite abstraerte de los eventos del navegador, de manera que no haya que usar ningún addEventListener u otras librerías como jQuery para tratarlos.

Nosotros colocaremos el evento en el elemento HTML que escribamos como JSX pero este no aparecerá renderizado en el HTML final como un evento inline. Este evento se va delegando a través del Virtual DOM y nuestro HTML queda limpio.

####Eventos de Mouse

* onClick
* onContextMenu
* onDoubleClick
* onDrag
* onDragEnd
* onDragEnter
* onDragExit
* onDragLeave
* onDragOver
* onDragStart
* onDrop
* onMouseDown
* onMouseEnter
* onMouseLeave
* onMouseMove
* onMouseOut
* onMouseOver
* onMouseUp
####Eventos de Teclado

* onKeyDown
* onKeyPress
* onKeyUp
####Eventos Touch


* onTouchCancel
* onTouchEnd
* onTouchMove
* onTouchStart
####Eventos de portapapeles

* onCopy
* onCut
* onPaste
* Y muchos <a href="https://reactjs.org/docs/events.html">más</a>