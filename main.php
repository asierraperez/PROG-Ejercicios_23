
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
    $alumno1=new Alumno("pablo","solveira","28","5");
    $alumno2=new Alumno("aida","castro","19","8.5");

    //$alumnnoBuscar=$_POST["nombreBuscar"];
    $estudiantes=array($alvaro,$alumno1,$alumno2);
    echo json_encode($estudiantes[0])
    /*for ($i=0; $i <count($estudiantes) ; $i++) { 
        if ($estudiantes[$i]->nombre==$alumnnoBuscar){
            echo json_encode($estudiantes[$i]);
        }
    }*/

    
    

    
    
    //echo json_encode($estudiantes)

    ?>

