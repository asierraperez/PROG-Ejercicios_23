<html>
<body>
    <?php

    class Alumno{
        public $nombre;
        public $apellidos;
        public $edad;
        public $nota;
        
        function __construct($nombre,$apellidos,$edad,$nota){
            $this->nombre=$nombre;
            $this->apellidos=$apellidos;
            $this->edad=$edad;
            $this->nota=$nota;
            $this->resultado="OK"

        } 

        function mostrar(){
            echo "Se pulsó el botón de envío con la información:<br>";
            echo "Nombre: $this->nombre<br>";
            echo "Apellidos: $this->apellidos<br>";
            echo "Edad: $this->edad<br>";
            echo "Nota: $this->nota<br>";

        }

        
    }

    $alvaro=new Alumno($_POST["nombre"],$_POST["apellidos"],$_POST["edad"],$_POST["nota"]);
    
    //echo json_encode($alvaro);
    if ($alvaro){
        $resultado="OK";
    } else{
        $resultado="ERROR";
    }
    echo $resultado;
    $estudiantes=array($alvaro,0,0);
    $estudiantes[0]->mostrar();
    

    ?>
</body>
</html>
