<?php
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

foreach($veiculos as $placa => $veiculo){
    echo $placa . " " . $veiculo["marca"] . " "
    . $veiculo["modelo"] . "<br>";
}

//php -S localhost:8080
