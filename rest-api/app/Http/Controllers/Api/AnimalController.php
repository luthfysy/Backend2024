<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AnimalController extends Controller
{
    // Buat properti animals sebagai array
    private $animals = ['kucing', 'ayam', 'ikan'];

    // Menampilkan data animals (GET Request)
    public function index()
    {
        return response()->json($this->animals);
    }

    // Menambahkan hewan baru ke dalam array animals (POST Request)
    public function store(Request $request)
    {
        // Validasi input
        $request->validate([
            'animal' => 'required|string',
        ]);

        // Tambahkan hewan baru ke array
        $this->animals[] = $request->animal;

        return response()->json($this->animals);
    }

    // Mengupdate data hewan berdasarkan id (PUT Request)
    public function update(Request $request, $id)
    {
        // Validasi input
        $request->validate([
            'animal' => 'required|string',
        ]);

        // Cek apakah id ada di dalam array
        if (isset($this->animals[$id])) {
            $this->animals[$id] = $request->animal; // Update hewan
        } else {
            return response()->json(['message' => 'Hewan tidak ditemukan'], 404);
        }

        return response()->json($this->animals);
    }

    // Menghapus data hewan berdasarkan id (DELETE Request)
    public function destroy($id)
    {
        // Cek apakah id ada di dalam array
        if (isset($this->animals[$id])) {
            unset($this->animals[$id]); // Hapus hewan
            $this->animals = array_values($this->animals); // Reindex array setelah penghapusan
        } else {
            return response()->json(['message' => 'Hewan tidak ditemukan'], 404);
        }

        return response()->json($this->animals);
    }
}
