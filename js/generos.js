// $('#exampleModal').on('show.bs.modal', function (event) {
//     var button = $(event.relatedTarget) // Botão que acionou o modal
//     var recipient = button.data('whatever') // Extrai informação dos atributos data-*
//     // Se necessário, você pode iniciar uma requisição AJAX aqui e, então, fazer a atualização em um callback.
//     // Atualiza o conteúdo do modal. Nós vamos usar jQuery, aqui. No entanto, você poderia usar uma biblioteca de data binding ou outros métodos.
//     var modal = $(this)
//     modal.find('.modal-title').text('Nova mensagem para ' + recipient)
//     modal.find('.modal-body input').val(recipient)
//   })
  
//   /*Entrada da Função Senha*/
//   document.getElementById('olho').addEventListener('mousedown', function() {
//     document.getElementById('senha').type = 'text';
//   });
  
//   document.getElementById('olho').addEventListener('mouseup', function() {
//     document.getElementById('senha').type = 'password';
//   });
  
//   // Para que o password não fique exposto apos mover a imagem.
//   document.getElementById('olho').addEventListener('mousemove', function() {
//     document.getElementById('senha').type = 'password';
//   });