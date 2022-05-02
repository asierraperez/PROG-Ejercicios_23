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

        } 

        function mostrar(){
            echo "Nombre: $this->nombre<br>";
            echo "Apellidos: $this->apellidos<br>";
            echo "Edad: $this->edad<br>";
            echo "Nota: $this->nota<br>";

        }
    }

    $alvaro=new Alumno($_POST["nombre"],$_POST["apellidos"],$_POST["edad"],$_POST["nota"]);

    $alvaro->mostrar();
    ?>
</body>
</html>
