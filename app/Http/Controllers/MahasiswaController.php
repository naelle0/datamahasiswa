<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Http\Request;
use Inertia\Inertia;


class MahasiswaController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $mahasiswa = Mahasiswa::all();
        return Inertia::render('Mahasiswa/Index', ['mahasiswa' => $mahasiswa]);
    }

    public function formAdd() {
        return Inertia::render('Mahasiswa/Add');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nis' => 'required|numeric|unique:mahasiswa,nis',
            'nama_lengkap' => 'required|string|max:255',
            'jenkel' => 'required|in:L,P',
            'alamat' => 'required|string|max:500',
        ]);

        // Simpan data ke dalam database
        Mahasiswa::create($validated);

        // Redirect atau beri respon setelah penyimpanan berhasil
        return redirect()->route('mahasiswa.index')->with('success', 'Data berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        // Logika untuk menemukan data mahasiswa berdasarkan ID
        $mahasiswa = Mahasiswa::find($id);
    
        // Pastikan data mahasiswa ditemukan, jika tidak, kembalikan error atau redirect
        if (!$mahasiswa) {
            return redirect()->route('mahasiswa.index')->with('error', 'Mahasiswa not found');
        }
    
        // Mengirim data ke tampilan edit
        return Inertia::render('Mahasiswa/Edit', ['mahasiswa' => $mahasiswa]);
    }
    

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        // Validasi data yang diterima
        $validated = $request->validate([
            'nis' => 'required|string|max:20',
            'nama_lengkap' => 'required|string|max:255',
            'jenkel' => 'required|string|max:1',
            'alamat' => 'required|string|max:255',
        ]);
    
        // Temukan mahasiswa berdasarkan ID
        $mahasiswa = Mahasiswa::find($id);
    
        // Update data mahasiswa
        $mahasiswa->update($validated);
    
        // Redirect ke halaman index dengan pesan sukses
        return redirect()->route('mahasiswa.index')->with('success', 'Data mahasiswa berhasil diupdate');
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $mahasiswa = Mahasiswa::findOrFail($id);
        $mahasiswa->delete();
    
        return redirect()->route('mahasiswa.index')->with('success', 'Data berhasil dihapus.');
    }
    
}
