<!-- 
    1. Etiquetas FORM e INPUTS
    2. PETICIONES GET o POST
        2.1 GET -- Pedir información (filtrado, búsquedas...)
        Tiene la informacion en la URL
        2.2 POST -- Dar cosas al servidor (guardar en Base de datos, registro, login, correos...)
        Información importante
        Datos van en el body de la peticion
    3. RECIBIR Datos de la petición (PHP)
    4. ENVIAR Correo
-->

 <?php
    //Código PHP

   
    // Sacar por pantalla
    echo $numerito;

    print_r($numerito);


   
    
    // PHP
    // RECOGEMOS Variables POST
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $mensaje = $_POST['mensaje'];

    

    
    
    // ENVIAR CORREO
    // Receptor
    $to = "lmorenof28@gmail.com";
    // Asunto
    $subject = "Consulta de la web";

    // Mensaje
    $body = "<html>
            <head></head>
            <body>
                <h1> Consulta en la web </h1>
                <p> $mensaje </p>
            </body>
    </html>";

    // Cabeceras del correo;
    $headers = "MIME-Version: 1.0 \r\n" ;
    $headers .= "Content-type:text/html;charset=UTF-8 \r\n";
    $headers .= "From: $correo \r\n ";

    // Mail devuelve TRUE si envia correo FALSE si algo ha ido mal y no ha enviado correo
    $envioMail = mail( $to, $subject, $body, $headers ); // true / false

    if( $envioMail ){
        echo "Correo enviado con éxito";
    }
   
    

?>

