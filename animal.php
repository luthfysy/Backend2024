<?php

# Membuat class Animal
class Animal
{
    # Properti animals
    private $animals = [];

    # Constructor untuk mengisi data awal
    public function __construct($data)
    {
        $this->animals = $data;
    }

    # Method index - menampilkan seluruh data animals dengan index-nya
    public function index()
    {
        foreach ($this->animals as $index => $animal) {
            echo "$index - " . $animal . "<br>";
        }
    }

    # Method store - menambahkan hewan baru
    public function store($data)
    {
        array_push($this->animals, $data);
        echo "Menambahkan hewan baru: $data<br>";
    }

    # Method update - mengupdate hewan di index tertentu
    public function update($index, $data)
    {
        if (isset($this->animals[$index])) {
            $this->animals[$index] = $data;
            echo "Mengupdate hewan di index $index menjadi $data<br>";
        } else {
            echo "Index $index tidak ditemukan.<br>";
        }
    }

    # Method destroy - menghapus hewan di index tertentu menggunakan unset
    public function destroy($index)
    {
        if (isset($this->animals[$index])) {
            unset($this->animals[$index]);
            $this->animals = array_values($this->animals);  # Reset index array
            echo "Menghapus hewan di index $index<br>";
        } else {
            echo "Index $index tidak ditemukan.<br>";
        }
    }
}

# Membuat objek dan mengisi data awal
$animal = new Animal(['Ayam', 'Ikan']);

echo "Index - Menampilkan seluruh hewan<br>";
$animal->index();
echo "<br>";

echo "Store - Menambahkan hewan baru (Burung)<br>";
$animal->store('Burung');
$animal->index();
echo "<br>";

echo "Update - Mengupdate hewan<br>";
$animal->update(0, 'Kucing Anggora');
$animal->index();
echo "<br>";

echo "Destroy - Menghapus hewan<br>";
$animal->destroy(1);
$animal->index();
echo "<br>";
?>