<?php

function adicionaVeiculo(array &$veiculos,
                         string $placa,
                         string $modelo,
                         string $marca)
{
    $veiculos[$placa] = [
        "marca" => $marca,
        "modelo" => $modelo
];

}

function removeVeiculo(array $veiculos, string $placa) : array
{
    unset($veiculos[$placa]);
    return $veiculos;
}