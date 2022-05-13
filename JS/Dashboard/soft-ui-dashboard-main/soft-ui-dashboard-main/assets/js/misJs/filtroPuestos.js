$(() => {
  $('#filters button')
    .on('click', function() {
      const filtro = this.id;
      //console.log(filtro);
      if(filtro == "ALL")
           cargarAutores();
       else
           cargarAutores(filtro);
    });
});
