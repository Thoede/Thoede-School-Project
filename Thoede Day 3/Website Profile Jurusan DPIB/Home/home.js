const links = document.querySelectorAll('nav .navigation ul li a');

links.forEach(link => {
    link.addEventListener('click', () => {
        // Hapus kelas 'active' dari semua link
        links.forEach(l => l.classList.remove('active'));

        // Tambahkan kelas 'active' pada link yang diklik
        link.classList.add('active');
    });
});
