<h1>CEPA</h1>
<h2>INICIALIZAR EL PROYECTO</h2><br>
<ul>
    <li>Inicializar XAMPP</li><br>
    <li>Crear la base de datos en local con el nombre especificado en el .env</li><br>
    <li>Desde un CMD, posicionandonos desde el directorio de back ejecutar <b>npx nodemon</b> para inicializar el servicio.</li><br>
    <li>Abrir otro CMD y, nuevamente desde el directorio de back, ejecutar <b>npx npm update</b> para actualizar todos los paquetes que necesitemos para el funcionamiento de la aplicación.</li><br>
    <li>Desde el CMD anterior, ejecutar el comando <b>npx sequelize-cli db:migrate</b> para crear las tablas en la base de datos.</li><br>
    <li>Por último, desde el mismo CDM, ejecutar el comando <b>npx sequelize-cli db:seed:all</b> para cargar todos los datos predefinidos de las tablas.</li>
</ul>
<br><br>Se ha utilizado la nomenclatura lowerCamelCase en todo el proyecto.