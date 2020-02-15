<?php

//php -S localhost:8080

require_once("funcoe.php");

$veiculos = [
    "ABC-1234" => [
    "marca" => "Ford",
    "modelo" => "Mustang"
    ],
    "DEF-5678" => [
        "marca" => "Dodge",
        "modelo" => "Challengr"
    ]
];

adicionaVeiculo($veiculos, "PHP-001", "Charger", "Dodge");
$veiculos = removeVeiculo($veiculos, "ABC-1234");

// print_r($veiculos);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fiap Estacionamento</title>
</head>
<body>
    <ul>
        <?php foreach($veiculos as $placa => $veiculo){ ?>
            <li><?= echo $placa . " " . $veiculo["marca"] . " "
                . $veiculo["modelo"]; ?></li>
        <?php } ?>

    </ul>
</body>
</html>


    
}

