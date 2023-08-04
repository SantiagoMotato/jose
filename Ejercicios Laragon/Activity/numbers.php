<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Identificar Numeros</title>
</head>
<body>
    <form action="#" method="POST">
        <input type="number" name="numero" id="numero" placeholder="Ingrese un numero">
        <button type="submit">Enviar</button>
    </form>
    <?php

        $numero;

        if(isset($_POST['numero'])){
            $numero = $_POST['numero'];
        }
        
        if ($numero < 0){
            print("El número es negativo");
        }elseif ($numero == 0){
            print("El numero es 0");
        }else{
            print("El numero es positivo");
        }

    ?>
</body>
</html>