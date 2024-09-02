import React, { useState, useEffect } from "react";
import { Inertia } from "@inertiajs/inertia";
import Case from "../Components/Case";

export default function Edit({ mahasiswa }) {
    const [formData, setFormData] = useState({
        nis: mahasiswa.nis || "",
        nama_lengkap: mahasiswa.nama_lengkap || "",
        jenkel: mahasiswa.jenkel || "",
        alamat: mahasiswa.alamat || "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.put(`/mahasiswa/${mahasiswa.id}`, formData);
    };

    return (
        <>
            <Case />
            <div className="relative overflow-x-auto shadow-md px-6 py-10 bg-gray-900 min-h-screen w-full">
                <h1 className="text-2xl font-semibold text-white text-center mb-5">Edit Data</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="nis">
                            NIS
                        </label>
                        <input
                            type="text"
                            name="nis"
                            id="nis"
                            value={formData.nis}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-gray-900"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="nama_lengkap">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            name="nama_lengkap"
                            id="nama_lengkap"
                            value={formData.nama_lengkap}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-gray-900"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="jenkel">
                            Jenis Kelamin
                        </label>
                        <select
                            name="jenkel"
                            id="jenkel"
                            value={formData.jenkel}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-gray-900"
                            required
                        >
                            <option value="">Pilih Jenis Kelamin</option>
                            <option value="L">Laki-Laki</option>
                            <option value="P">Perempuan</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="alamat">
                            Alamat
                        </label>
                        <textarea
                            name="alamat"
                            id="alamat"
                            value={formData.alamat}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-gray-900"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Update Data
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
