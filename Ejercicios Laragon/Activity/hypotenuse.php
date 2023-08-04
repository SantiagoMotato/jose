<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Promedio Notas</title>
</head>
<body>
    
    <form action="#" method="POST">
        <input type="number" name="lado1" id="lado1" placeholder="Ingrese el cateto 1" step="any" required>
        <input type="number" name="lado2" id="lado2" placeholder="Ingrese el cateto 2" step="any" required>
        <button type="submit">Calcular</button>
    </form>

    <?php
        if(isset($_POST['lado1']) && isset($_POST['lado2'])){
            $lado1 = $_POST['lado1'];
            $lado2 = $_POST['lado2'];

            $hipotenusa = sqrt($lado1**2 + $lado2**2);

            echo "La hipotenusa es $hipotenusa"."<br>";
        }
    ?>
</body>
</html>