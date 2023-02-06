# Introducción teorica

Jenkins ayuda en la automatización de parte del proceso de desarrollo de software mediante integración continua y facilita ciertos aspectos de la entrega continua. Admite herramientas de control de versiones como CVS, Subversion, Git, Mercurial, Perforce y Clearcase y puede ejecutar proyectos basados en Apache Ant y Apache Maven.
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

# Test

He creado los tests de jest.

<img src='./img/Captura de pantalla 2023-02-04 150535.png' />
<img src='./img/Captura de pantalla 2023-02-04 150549.png' />

Para poder utilizar jest con imports he tenido que instalar babel y realizar algunas configuraciónes.

**package.json**

<img src='./img/Captura de pantalla 2023-02-04 150851.png' />

**babel.config.json**

<img src='./img/Captura de pantalla 2023-02-04 150900.png' />

He modificado el Jenkinsfile

<img src='./img/Screenshot_20230203_185451.png' />
<img src='./img/Captura de pantalla 2023-02-04 151443.png' />

# Build

He modificado el Jenkinsfile

<img src='./img/Captura de pantalla 2023-02-04 152015.png' />
<img src='./img/Captura de pantalla 2023-02-04 152155.png' />

# Update_Readme

He modificado el Jenkinsfile
<img src='./img/Captura de pantalla 2023-02-04 163615.png' />
<img src='./img/Captura de pantalla 2023-02-04 163505.png' />

Script que realiza los cambios en el README
<img src='./img/Captura de pantalla 2023-02-04 164016.png' />

### RESULTADO DE LOS ÚLTIMOS TESTS:
<img src='https://img.shields.io/badge/tested%20with-Jest-04C38E.svgs' />


# Push_Changes

He instalado la extención ssh agent la cual me permite utilizar las claves ssh que tengo en jenkins como credencialies en un script que realiza el commit
<img src='./img/Screenshot_20230206_195408.png' />

Script:
<img src='./img/Screenshot_20230206_195418.png' />

He modificado el Jenkinsfile, en el apartado de sshagent en la credencial es la ID de la credencial y no el nombre.
<img src='./img/Screenshot_20230206_195433.png' />
<img src='./img/Screenshot_20230206_195655.png' />
<img src='./img/Screenshot_20230206_200100.png' />

# Deploy to Vercel

### Web URL: https://practicajenkins-sergimicoortiz.vercel.app/  