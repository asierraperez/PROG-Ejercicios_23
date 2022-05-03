
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
            $this->resultado="";

        } 

        /*function mostrar(){
            echo "Se pulsó el botón de envío con la información:<br>";
            echo "Nombre: $this->nombre<br>";
            echo "Apellidos: $this->apellidos<br>";
            echo "Edad: $this->edad<br>";
            echo "Nota: $this->nota<br>";
            echo "Operacion: $this->resultado<br>";*


        }*/

        
    }

    $alvaro=new Alumno($_POST["nombre"],$_POST["apellidos"],$_POST["edad"],$_POST["nota"]);
    
    if ($alvaro){
        $alvaro->resultado="OK";
    } else{
        $alvaro->resultado="ERROR";
    }
    
    echo json_encode($alvaro);
    
    

    /*$estudiantes=array($alvaro,0,0);
    $estudiantes[0]->mostrar();*/
    

    ?>

