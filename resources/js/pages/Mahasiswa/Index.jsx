import React from 'react';
import Case from '../Components/Case';
import { Link } from '@inertiajs/react'; 
import { Inertia } from '@inertiajs/inertia';

const Index = ({ mahasiswa }) => {
    const handleDelete = (id) => {
        if (confirm('Apakah yakin ingin menghapus data ini?')) {
            Inertia.delete(`/mahasiswa/${id}`);
        }
    };

    return (
        <>
            <Case />
            <div className="relative overflow-x-auto shadow-md px-6 py-10 bg-gray-900">
                <h1 className="text-2xl font-semibold text-white text-center mb-5">Data Mahasiswa</h1>
                <Link href='/mahasiswa/add' className='inline-flex items-center px-4 py-2 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm' style={{ marginBottom: 30 }}>
                    Tambah Data
                </Link>
                <table className="w-full text-sm text-left rtl:text-right text-gray-400">
                    <thead className="text-xs text-gray-300 uppercase bg-gray-800">
                        <tr>
                            <th scope="col" className="px-6 py-3">NO</th>
                            <th scope="col" className="px-6 py-3">NIS</th>
                            <th scope="col" className="px-6 py-3">Nama Lengkap</th>
                            <th scope="col" className="px-6 py-3">Jenis Kelamin</th>
                            <th scope="col" className="px-6 py-3">Alamat</th>
                            <th scope="col" className="px-6 py-3">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mahasiswa.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">Data Kosong</td>
                            </tr>
                        ) : (
                            mahasiswa.map((mhs, index) => (
                                <tr key={mhs.id} className="bg-gray-800 border-b border-gray-700 hover:bg-gray-700">
                                    <td className="px-6 py-4 text-gray-300">{index + 1}</td>
                                    <td className="px-6 py-4 text-gray-300">{mhs.nis}</td>
                                    <td className="px-6 py-4 text-gray-300">{mhs.nama_lengkap}</td>
                                    <td className="px-6 py-4 text-gray-300">
                                        {mhs.jenkel === 'L' ? 'Laki-Laki' : 'Perempuan'}
                                    </td>
                                    <td className="px-6 py-4 text-gray-300">{mhs.alamat}</td>
                                    <td className="px-6 py-4">
                                    <div className="flex space-x-2">
                                       <Link
                                           href={`/mahasiswa/${mhs.id}/edit`}
                                            className="inline-flex items-center px-4 py-2 text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm"
                                        >
                                        Edit
                                        </Link>
                                        <button
                                        onClick={() => handleDelete(mhs.id)}
                                        className="inline-flex items-center px-4 py-2 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm"
                                        >
                                        Delete
                                        </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Index;
