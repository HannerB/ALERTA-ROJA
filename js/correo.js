$(document).ready(function () {
    $('#contactForm').on('submit', function (event) {
        event.preventDefault(); // Prevenir el envío normal del formulario

        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Tu mensaje se enviará.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, enviar',
            cancelButtonText: 'No, cancelar',
            customClass: {
                popup: 'swal-popup',
                title: 'swal-title',
                confirmButton: 'swal-confirm-button',
                cancelButton: 'swal-cancel-button',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Mostrar animación de carga
                Swal.fire({
                    title: 'Enviando...',
                    text: 'Por favor, espera mientras se envía tu mensaje.',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    },
                    customClass: {
                        popup: 'swal-popup',
                        title: 'swal-title',
                    }
                });

                // Enviar el formulario mediante AJAX
                $.ajax({
                    type: 'POST',
                    url: $(this).attr('action'),
                    data: $(this).serialize(),
                    success: function (response) {
                        Swal.fire({
                            title: '¡Enviado!',
                            text: 'Tu mensaje ha sido enviado con éxito.',
                            icon: 'success',
                            customClass: {
                                popup: 'swal-popup',
                                title: 'swal-title',
                            }
                        });
                        $('#contactForm')[0].reset(); // Reiniciar el formulario
                    },
                    error: function () {
                        Swal.fire({
                            title: 'Error',
                            text: 'Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.',
                            icon: 'error',
                            customClass: {
                                popup: 'swal-popup',
                                title: 'swal-title',
                            }
                        });
                    }
                });
            }
        });
    });
});
