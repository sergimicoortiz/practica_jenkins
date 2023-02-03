# Creación de la tarea

He creado la tarea en jenkins

<img src='./img/Screenshot_20230203_175009.png' />

Lo he configurado para que use git con una credencial ssh, para poder utilizar esta credencial he tenido que desactivar Git Host Key Verification Configuration.

<img src='./img/Screenshot_20230203_175058.png' />
<img src='./img/Screenshot_20230203_175752.png' />
<img src='./img/Screenshot_20230203_180015.png' />

# Petición de datos

He creado el jenkinsfile el cual pide datos en una stage y los guarda en variables.

<img src='./img/Screenshot_20230203_182716.png' />
<img src='./img/Screenshot_20230203_175557.png' />
<img src='./img/Screenshot_20230203_175705.png' />

# Build Monitor View

He instalado el plugin.

<img src='./img/Screenshot_20230203_182953.png' />

He creado la vista indicandole el job el cual debe de monitorizar.

<img src='./img/Screenshot_20230203_183455.png' />
<img src='./img/Screenshot_20230203_183523.png' />
<img src='./img/Screenshot_20230203_183542.png' />

# Linter


Para poder utilizar eslint he instalado y configuradl el plugin de nodejs. De esta forma se ouede utilizar node como tool en el jenkinsfile

<img src='./img/Screenshot_20230203_184105.png' />

He configurado el eslint

<img src='./img/Screenshot_20230203_183824.png' />

Comando que ejecuta es eslint.

<img src='./img/Screenshot_20230203_183844.png' />

He modificado el fichero Jenkinsfile añadiendo la tool y dos stages una para instalar las dependencias de node y otro para ejecutar el eslint.

<img src='./img/Screenshot_20230203_184440.png' />
<img src='./img/Screenshot_20230203_184426.png' />