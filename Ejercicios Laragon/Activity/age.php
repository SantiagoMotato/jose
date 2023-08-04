<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edad</title>
</head>
<body>
    <form action="#" method="POST">
        <input type="number" name="edad" id="edad" placeholder="Ingrese la edad" required>
        <button type="submit">Send</button>
    </form>

    <?php
        if(isset($_POST['edad'])){
            $edad = $_POST['edad'];

            if ($edad < 0){
                echo "Please, input a valid data. ";
            }elseif($edad <= 12){
                echo "You're a child";
            }elseif($edad <= 21){
                echo "You're a teenager";
            }elseif($edad <= 31){
                echo "You're young";
            }elseif($edad <= 60){
                echo "You're an adult";
            }else{
                echo "You're an older adult";
            }   
        }      
    ?>
</body>
</html>