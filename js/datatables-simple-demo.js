window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimple');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
        // Tambahkan event handler untuk submit form
        table.on('submit', function(e, datatable) {
            // Submit form secara normal
            datatable.submit();
        });
    }
});
