<?php
    class Veiculo
    {
        public string $placa;
        public string $marca;
        public string $modelo;

        public function __construct(string $placa, string $marca, string $modelo) {
            $this -> placa = $placa;
            $this -> marca = $marca;
            $this -> modelo = $modelo;
        }

        public function veiculoInfo() {
            return "$this->marca $this->modelo";
        }

    }