<?php

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

$veiculos["PHP-001"] = [
        "marca" => "Dodge",
        "modelo" => "Charger"
];

unset($veiculos["ABC-1234"]);

print_r($veiculos);


//print_r($veiculos);

// foreach($veiculos as $placa => $veiculo){
//     echo $placa . " " . $veiculo["marca"] . " "
//     . $veiculo["modelo"] . PHP_EOL;
// }

