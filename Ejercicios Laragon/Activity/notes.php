<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promedio Notas</title>
</head>
<body>
    <form action="#" method="POST">
        <input type="number" name="nota1" id="nota1" placeholder="Ingrese la nota 1" max="5" min="0" step="any" required>
        <input type="number" name="nota2" id="nota2" placeholder="Ingrese la nota 2" max="5" min="0" step="any" required>
        <input type="number" name="nota3" id="nota3" placeholder="Ingrese la nota 3" max="5" min="0" step="any" required>
        <button type="submit">Promedio</button>
    </form>

    <?php
        if(isset($_POST['nota1']) && isset($_POST['nota2']) && isset($_POST['nota3'])){
            $nota1 = $_POST['nota1'];
            $nota2 = $_POST['nota2'];
            $nota3 = $_POST['nota3'];

            $suma = $nota1 + $nota2 + $nota3;

            $promedio = $suma/3;
            echo "Su promedio es $promedio"."<br>";

            if($promedio < 3.5){
                $message = "Has reprobado";
            }else{
                $message = "Has Aprobado";
            }

            echo $message;
        }
    ?>

</body>
</html>