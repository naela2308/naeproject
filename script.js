//1. Pilih tombol berdasakan ID-nya
const tombolSapa = document.getElementById('sapaButton');
//2. Tambahkan 'event listener' untuk aksi 'click'
tombolSapa.addEvnetListener('click', function() {
  //3. Jalankan kode  ini ketika tombol di-klik
  alert('Halo! Terima kasih sudah berkunjung!')
