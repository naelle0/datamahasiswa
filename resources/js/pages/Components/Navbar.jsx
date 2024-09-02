import React from "react";
import { Link } from '@inertiajs/react';

const Navbar = () => {
    return (
        <div className="bg-blue-600 py-2">
            <div className="grid grid-cols-12">
                <section className="col-span-10 col-start-2">
                    <div className="flex items-center">
                        <Link
                            className="mr-2 text-sm font-semibold uppercase text-white"
                            href="/"
                        >
                            INVENTARIS APP
                        </Link>
                        <Link 
                            className="ml-4 text-black"
                            href="/mahasiswa"
                        >
                            Mahasiswa
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Navbar;
