# Angular Material-Start (Tutorial en español)

Este branch contiene el tutorial los pasos y procesos utilizados para implementar la start-app que se muestra a continuación: 

![material-starter-ux2](https://cloud.githubusercontent.com/assets/210413/6448551/70864488-c0e0-11e4-8767-c4e1e4c2f343.png)

Arriba está un snaphot de la Starter-App con el layout de un **Maestro-Detalle**: que muestra una lista de usuarios (izquierda) y una vista con el detalle de un usuario (derecha). 

También se muestra la experiencia que será desplegada para dispositibos de tamaños pequeños. El layout responsivo revela el botón de **menu**que puede ser utilizado para ocultar la lista de usuarios y un botón de **compartir** que puede ser utilizado para mostrar la vista de bottom sheet.

Esta Starter ap muestra cómo:

*  Las opciones `layout` y `flex` de Angular Material pueden configurar contenederos HTML facilmente
*  Los components `<md-toolbar>`, `<md-sidenav>`, `<md-icon>` de Angular Material pueden ser utilizados rápidamente
*  Custom controllers can use and show `<md-bottomsheet>` with HTML templates
*  Controladores perzonalizados pueden utilizar y mostrar `<md-bottomsheet>` dentro de los templates HTML
*  Controladores perzonalizados pueden fácilmente, programáticamente abrir & cerrar el componente de barra de navegación lateral (SideNav).
*  Responsive breakpoints and `$mdMedia` are used
*  Los breakpoints responsivos y `$mdMedia` son utilizados
*  Theming can be altered/configured using `$mdThemingProvider`
*  El tema puede ser alterado/configurado usando `$mdThemingProvider`


El propocito de esta aplicación de muestra es tanto como una herramienta de aprendizaje y un esqueleto para una aplicación web típica de [AngularJS Material](http://angularjs.org/): compuesta de un area de Navegación lateral y un area de contenido. La puedes utilizar, para inicializar rápidamente tus proyectos de aplicación web de angular y de anviente de desarrollo para estos 
proyectos.

<br/>
- - -

#### "Cómo construir una Ap"

Aquí hay algunos pasos generalizados que tal vez son usados para conceptualizar el proceso de implementacion de la aplicación:

1. Planea tu layout y los componentes que quieres usar
2. Utiliza HTML en código-duro y  and imitar el contenido para asegurarse que los componentes aparezcan de la forma deseada
3. Wire components to your application logic
3. Conecta componentes a la lógica de tu aplicación
> Utiliza la perfecta integración posible entre las directivas y los controladores de Angular<br/>
> Esta integreción asume que haz hecho las pruebas unitarias de la lógica de tu ap
4. Agrega breakpoints responsivos
5. Agrega soporte par Temas
6. Confirma la obediencia de ARIA
7. Escribe pruebas e2e 
> Es importante validar la lógica de tu ap con los componentes de IU de Angular Material.

<br/>
###### Wireframe 

La siguiente ilustración muestra como planeamos el layout e identificamos los componentes primarios que serán utilizados in la Starter ap:

<br/>
![plancomponents2](https://cloud.githubusercontent.com/assets/210413/6444676/c247c8f8-c0c4-11e4-8206-208f55cbceee.png)

> Nota: el contenedor #2 (por encima) es un simple contenedor `<div>` y no un componente de Angular Material .

<br/>
- - -

##### Tutorial (ES5)

Este tutorial asume que ya haz clonado el repositorio y ejecutado el comando `npm install`.

You will notice html Tutorials #0 thru #8: these will be used to guide you through the development process. By following these tutorials stages, you will be very quickly introduced to the powerful features of Angular Material.

Each tutorial presents the resulting changes for that stage. It is recommended, however, that you start with the preceding tutorial and manually make the changes requested. The effort you invest to implement these changes will highlight specific concepts at each Tutorial stage.

> At each tutorial stage, you should use a web-server to view the that tutorial page. Open the dev console to see any warnings and browser the elements.

<br/>
- - -

### Paso #1:

Aquí modificaste la aplicación shell [disponible en `tutorial_0.html`] para utilizar Angular-Material.

* Usa Bower para instalar angular-material con `bower install angular-material -D`
* En el HTML, carga los módulos CSS y JS:
* Configura en tu ap la dependencia 'ngMaterial'

```html
  <head>
    <link rel="stylesheet" href="./bower_components/angular-material/angular-material.css"/>
  </head>

  <body>

    <script src="./bower_components/angular-animate/angular-animate.js"></script>
    <script src="./bower_components/angular-aria/angular-aria.js"></script>
    <script type="text/javascript" src="./bower_components/angular-material/angular-material.js"></script>

	<script>
		angular.module('starterAp', ['ngMaterial']);
	</script>
  </body>
```

### Paso #2:

Here you used the wireframe planning and layout to identify the components and attributes needed.
Aquí usaste la planeación del wireframe y layout para identificar los componentes y atributos necesarios.

* Agrega los contenedores `<md-toolbar>`, `<md-sidenav>`, `<md-content>`
> Nota: que el contenedor md-sidenav es la vista **maestra** de la lista de Usuarios, y el md-content es el contenedor para la vista de **detale** de Usuario.
* Agrega los atributos **layout** y **flex** para configurarl los contenedores layouts y los aspectos de tamaño.
* Utiliza `md-locked-open` para asegurar que la sidenav esté abierta en el lado izquierdo
* Utiliza el `md-whiteframe-z2` para agregar sombra a la sidenav

```html
  <body ng-app="starterAp" layout="column">

	<!-- Contenedor #1 (ver wireframe) -->
    <md-toolbar layout="row" >
      <h1>Angular Material - Starter Ap</h1>
    </md-toolbar>

	<!-- Contenedor #2 -->
    <div flex layout="row">

		<!-- Contenedor #3 -->
        <md-sidenav md-is-locked-open="true" class="md-whiteframe-z2"></md-sidenav>

		<!-- Contenedor #4 -->
        <md-content flex id="content"></md-content>

    </div>
	
  </body>
```

### Paso #3:

Aquí usarás elementos en código duro para confirmar el rendering y el layout de los elementos contenedores hijos y componentes Angular Material.

* Agrega los contenedores `<md-toolbar>`, `<md-sidenav>`, `<md-content>`
> Nota: que el contenedor md-sidenav es la vista **maestra** de la lista de Usuarios, y el md-content es el contenedor para la vista de **detale** de Usuario.
* Agrega los atributos **layout** y **flex** para configurarl los contenedores layouts y los aspectos de tamaño.
* Utiliza `md-locked-open` para asegurar que la sidenav esté abierta en el lado izquierdo
* Utiliza el `md-whiteframe-z2` para agregar sombra a la sidenav

```html
  <body ng-app="starterAp" layout="column">

	<md-sidenav md-is-locked-open="true" class="md-whiteframe-z2">
	  <md-list>

		<!-- Item de lista #1 -->
		<md-item >
			<md-button>
			  <md-icon md-svg-src="./assets/svg/avatar-1.svg" class="avatar"></md-icon>
			  Lia Luogo
			</md-button>
		</md-item>

		<!-- Item de lista #2 -->
		<md-item >
			<md-button>
			 <md-icon md-svg-src="./assets/svg/avatar-4.svg" class="avatar"></md-icon>
			  Lawrence Ray
			</md-button>
		</md-item>

	  </md-list>
	</md-sidenav>

	<md-content flex id="content">
	  <!-- Ejemplo del detalle de Usuario -->

	  <md-icon md-svg-src="./assets/svg/avatar-1.svg" class="avatar"></md-icon>
	  <h2>Lia Luogo</h2>
	  <p>
		Amo el queso...
	  </p>
	</md-content>

  </body>
```

### Paso #4:

Aquí integras la lógica de tu aplicación.

* Define un módulo de Angular para tu código
* Define your data services, models, and controllers
* Define tus servicios, modelos y controladores
* Carga tu código
* Registra tu módulo de Angular para la DI (inyección de dependencias)

```html
<script src="./src/users/Users.js"></script>
<script src="./src/users/UsersListController.js"></script>
<script src="./src/users/UsersDataservice.js"></script>

<script type="text/javascript">

  angular.module('starterAp', ['ngMaterial', 'users']);

</script>
```

### Paso #5:

Aquí remplazarás el HTML en código duro por código dinámico utilizando directivas de Angular (ej ng-repeat) y la interpolación `{{ }}`.

* Usa código HTML dinámico que será compilado y ejecutado por Angular
* Registra un set de íconos de los avatares de 'usurio' para la lista de usuario
* Register las urls de los íconos de **menú** y **compartir** para los md-buttons 

```html
 <!-- Contenedor Wireframe #2 -->
 <div flex layout="row">
 	<!-- Contenedor Wireframe #3 -->
	<md-sidenav md-is-locked-open="true" class="md-whiteframe-z2">
	  <md-list>
		<md-item ng-repeat="it in ul.users">
			<md-button ng-click="ul.selectUser(it)" ng-class="{'selected' : it === ul.selected }">
			  <md-icon md-svg-icon="{{it.avatar}}" class="avatar"></md-icon>
			  {{it.name}}
			</md-button>
		</md-item>
	  </md-list>
	</md-sidenav>

	<!-- Contenedor Wireframe #4 -->
	<md-content flex id="content">
	  <md-icon md-svg-icon="{{ul.selected.avatar}}" class="avatar"></md-icon>
	  <h2>{{ul.selected.name}}</h2>
	  <p>{{ul.selected.content}}</p>

	  <md-button class="action" md-no-ink>
		<md-icon md-svg-icon="share" ></md-icon>
	  </md-button>
	</md-content>
 </div>


 <script type="text/javascript">
  angular
	  .module('starterAp', ['ngMaterial', 'users'])
	  .config(function( $mdIconProvider ){

		  // Register the user `avatar` icons
		  $mdIconProvider
				  .defaultIconSet("./assets/svg/avatars.svg", 128)
				  .icon("menu", "./assets/svg/menu.svg", 24)
				  .icon("share", "./assets/svg/share.svg", 24);
	  });
 </script>
```

### Paso #6:

Aquí agregaras breakpoints de responsividad para que la aplicación se adapte a diferentes tamaños de dispositivo.

* Asegura que la lista de Usuarios esté abierta para dispositivos más anchos de > 600px; que se oculte de lo contrario.
* Oculta el ícono de la Toolbar si la lista de Usuarios está abierta.
* Agrega soporte para `click` a los botones de **menú** y **compartir**.
* Registra los íconos para la bottomsheet

```html
<body>
	<!-- Contenedor Wireframe #1 -->
    <md-toolbar layout="row">
      <md-button class="menu" hide-gt-sm ng-click="ul.toggleList()"></md-button>
    </md-toolbar>

	<!-- Contenedor Wireframe #2 -->
	<div flex layout="row">

	 <!-- Contenedor Wireframe #3 -->
	 <md-sidenav md-is-locked-open="$media('gt-sm')"
				 md-component-id="left">
	 </md-sidenav>

	 <!-- Contenedor Wireframe #4 -->
	 <md-content flex id="content">
	  <md-button class="share" md-no-ink ng-click="ul.share($event)"></md-button>
	 </md-content>

	</div>
</body>
```

Registara los íconos de **compartir** para que se desplieguen el la bottomsheet de la vista de Detalle de Usuario:

```html
<script type="text/javascript">

  angular
	  .module('starterAp', ['ngMaterial', 'users'])
	  .config(function($mdIconProvider){

		  $mdIconProvider
			  .defaultIconSet("./assets/svg/avatars.svg", 128)
			  .icon("menu"       , "./assets/svg/menu.svg"        , 24)
			  .icon("share"      , "./assets/svg/share.svg"       , 24)
			  .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
			  .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
			  .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
			  .icon("phone"      , "./assets/svg/phone.svg"       , 512);
	  });

</script>
```


### Paso #7:

Aquí configurarás un tema diferente para utilizarlo.

* Usa `$mdThemingProvider` para onfigurar un tema diferente utilizando como color primario la paleta **verde** y para los colores acentuados la paleta de color **rojo**.

```html
<script type="text/javascript">

  angular
	  .module('starterAp', ['ngMaterial', 'users'])
	  .config(function($mdThemingProvider, $mdIconProvider){

		  $mdThemingProvider.theme('default')
			  .primaryPalette('green')
			  .accentPalette('red');
	  });

</script>
```

### Paso #8:

Aquí arreglaras todas las alertas de ARIA que Angular Material despliegue en la consola de Desarrollo.

* Inserta atributos `aria-label` para los componentes mdButton que no tengan etiquetas.

```html
<body>
	<!-- Contenedor Wireframe #1 -->
    <md-toolbar layout="row">
      <md-button class="menu" aria-label="Mostrar Lista de Usuarios"></md-button>
    </md-toolbar>

	<!-- Contenedor Wireframe #2 -->
	<div flex layout="row">

	 <!-- Contenedor Wireframe #3 -->
	 <md-sidenav>...</md-sidenav>

	 <!-- Contenedor Wireframe #4 -->
	 <md-content flex id="content">
	  <md-button class="share" aria-label="Compartir"></md-button>
	 </md-content>

	</div>
</body>
```

## Resumen

Con solo un Tutorial de ocho (8) Pasos y unos pocos minutos de trabajo, hemos creado rápidamente una aplicación funcional de Angular Material que es bonita, responsiva, tematizada, accesible, y facilmente mantenible.


