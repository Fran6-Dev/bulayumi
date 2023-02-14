import React from 'react'

const Footer = () => {

    const d = new Date();
    let year = d.getFullYear();

    return (
        <footer class="bg-gray-200 text-center lg:text-left">
            <div class="text-gray-700 text-center p-4">
                © {year} Copyright: Espérance François Bulayumi
            </div>
        </footer>
    )
}

export default Footer