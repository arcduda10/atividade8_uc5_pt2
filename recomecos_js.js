$(document).ready(function() {
    // Função para realizar a busca dos produtos
    function searchProducts() {
        var filter = $('.search-bar input').val().toUpperCase();
        $('.gallery-item').each(function() { 
            var cardTitle = $(this).find('.card-title').text();           
            if (cardTitle.toUpperCase().indexOf(filter) > -1) {
                $(this).show();
            } else {
                $(this).hide(); 
            }
        });
    }

    // Adiciona um evento de entrada à barra de pesquisa
    $('.search-bar input').on('input', searchProducts);

    // Função para abrir o popup de perfil
    function openProfilePopup() {
        $('#popup-message').html(`
            <h3>Perfil</h3>
            <p><a href="recomecos_login.html">Ir para a página de login!</a></p>
        `);
        $('#popup').css('display', 'flex'); // Exibindo o popup
    }

    // Função para abrir o popup de mensagens
    function openMessagePopup() {
        $('#popup-message').html(`
            <h3>Contato</h3>
            <p>E-mail: xxxxxxxxx@xxxx.com</p>
            <p>Telefone: (xx)xxxxx-xxx</p>
            <p>Redes sociais: xxxx - xxxx - xxxx</p>
            <p>Endereço: X. xxxx, y, xx</p>
        `);
        $('#popup').css('display', 'flex'); // Exibindo o popup
    }

    // Função para fechar o popup
    $('.close-btn').on('click', function() {
        $('#popup').hide(); // Esconde o popup
    });

    // Fechar o popup ao clicar fora do conteúdo
    $(window).on('click', function(event) {
        if ($(event.target).is('#popup')) {
            $('#popup').hide(); // Esconde o popup
        }
    });
});