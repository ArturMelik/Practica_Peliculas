
const peliculas = [
  {
    titulo: "El Exorcista",
    año: 1973,
    descripcion: "Una niña es poseída por una entidad demoníaca y dos sacerdotes intentan salvarla mediante un exorcismo.",
    urlFoto: "https://image.tmdb.org/t/p/w500/5x0CeVHJI8tcDx8tUUwYHQSNILq.jpg",
    genero: "Terror"
  },
  {
    titulo: "Mad Max: Fury Road",
    año: 2015,
    descripcion: "En un mundo post-apocalíptico, Max se une a Furiosa para escapar de un tirano en una persecución épica.",
    urlFoto: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
    genero: "Accion"
  },
  {
    titulo: "Superbad",
    año: 2007,
    descripcion: "Dos amigos intentan aprovechar su última oportunidad para ser populares antes de graduarse.",
    urlFoto: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
    genero: "Comedia"
  },
  {
    titulo: "El Resplandor",
    año: 1980,
    descripcion: "Un escritor acepta un trabajo como cuidador de un hotel aislado donde desciende a la locura.",
    urlFoto: "https://es.web.img3.acsta.net/pictures/14/04/15/10/46/568345.jpg",
    genero: "Terror"
  },
  {
    titulo: "Die Hard",
    año: 1988,
    descripcion: "Un policía debe salvar a los rehenes de un edificio tomado por terroristas durante una fiesta navideña.",
    urlFoto: "https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg",
    genero: "Accion"
  },
  {
    titulo: "Orgullo y Prejuicio",
    año: 2005,
    descripcion: "Elizabeth Bennet y el señor Darcy superan sus diferencias y prejuicios para encontrar el amor.",
    urlFoto: "https://m.media-amazon.com/images/I/81uKjJvJj5L._UF1000,1000_QL80_.jpg",
    genero: "Romantica"
  },
  {
    titulo: "The Hangover",
    año: 2009,
    descripcion: "Tres amigos intentan reconstruir la noche anterior después de una despedida de soltero desastrosa en Las Vegas.",
    urlFoto: "https://m.media-amazon.com/images/M/MV5BOWY0YzE1OTYtOTZkZC00YTVhLTkwZjQtYTQwNmExNmUxYTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    genero: "Comedia"
  },
  {
    titulo: "It",
    año: 2017,
    descripcion: "Un grupo de niños se enfrenta a un payaso demoníaco que aterroriza su pueblo.",
    urlFoto: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
    genero: "Terror"
  },
  {
    titulo: "John Wick",
    año: 2014,
    descripcion: "Un asesino retirado busca venganza contra aquellos que mataron a su perro y robaron su auto.",
    urlFoto: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    genero: "Accion"
  },
  {
    titulo: "El Diario de Noah",
    año: 2004,
    descripcion: "Un hombre lee a una mujer anciana la historia de amor de su juventud que cambió sus vidas.",
    urlFoto: "https://es.web.img3.acsta.net/medias/nmedia/18/67/61/01/20070878.jpg",
    genero: "Romantica"
  },
  {
    titulo: "Bridesmaids",
    año: 2011,
    descripcion: "Una dama de honor lucha por mantener su vida en orden mientras ayuda a su mejor amiga a casarse.",
    urlFoto: "https://m.media-amazon.com/images/M/MV5BMjAyOTMyMzUxNl5BMl5BanBnXkFtZTcwODI4MzE0NA@@._V1_.jpg",
    genero: "Comedia"
  },
  {
    titulo: "Hereditary",
    año: 2018,
    descripcion: "Una familia se ve acechada por oscuros secretos y presencias tras la muerte de su abuela.",
    urlFoto: "https://image.tmdb.org/t/p/w500/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg",
    genero: "Terror"
  },
  {
    titulo: "El Conjuro",
    año: 2013,
    descripcion: "Los investigadores paranormales Ed y Lorraine Warren ayudan a una familia aterrorizada por una presencia maligna.",
    urlFoto: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    genero: "Terror"
  },
  {
    titulo: "Gladiador",
    año: 2000,
    descripcion: "Un general romano traicionado busca vengarse del emperador corrupto que mató a su familia.",
    urlFoto: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    genero: "Accion"
  },
  {
    titulo: "Inception",
    año: 2010,
    descripcion: "Un ladrón especializado en entrar en los sueños debe cumplir una misión imposible para recuperar su vida.",
    urlFoto: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    genero: "Accion"
  },
  {
    titulo: "Step Brothers",
    año: 2008,
    descripcion: "Dos adultos inmaduros se convierten en hermanastros y deben aprender a convivir bajo el mismo techo.",
    urlFoto: "https://upload.wikimedia.org/wikipedia/en/d/d9/StepbrothersMP08.jpg",
    genero: "Comedia"
  },
  {
    titulo: "Crazy, Stupid, Love",
    año: 2011,
    descripcion: "Un hombre recién divorciado recibe consejos de un joven seductor para recuperar su confianza.",
    urlFoto: "https://m.media-amazon.com/images/I/81P3LIAju6L.jpg",
    genero: "Comedia"
  },
  {
    titulo: "La La Land",
    año: 2016,
    descripcion: "Una actriz y un músico luchan por sus sueños mientras viven una historia de amor inolvidable en Los Ángeles.",
    urlFoto: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    genero: "Romantica"
  },
  {
    titulo: "Titanic",
    año: 1997,
    descripcion: "Una joven de clase alta se enamora de un humilde artista a bordo del desafortunado Titanic.",
    urlFoto: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    genero: "Romantica"
  }
];



// 2. SELECCIÓN DE ELEMENTOS DEL DOM

const peliculasList = document.getElementById("filtered-peliculas");
const filtroGenero = document.getElementById("filtroGenero");
const peliculasForm = document.getElementById("peliculas-form");



// Busqueda por genero.
function obtenerPeliculasFiltradas() {
  const generoSeleccionado = filtroGenero.value.toLowerCase();
  
  if (generoSeleccionado === "todos") {
    return peliculas;
  }
  
  return peliculas.filter(p => p.genero.toLowerCase() === generoSeleccionado);
}

function renderizarConFiltro() {
  const peliculasFiltradas = obtenerPeliculasFiltradas();
  mostrarPeliculaList(peliculasFiltradas);
}





// Evento de eliminacion
function eliminarPelicula(pelicula) {
  const indexReal = peliculas.findIndex(p => p.titulo === pelicula.titulo && p.año === pelicula.año);
  peliculas.splice(indexReal, 1);
  renderizarConFiltro();

}

// Edicion de la pelicula ( boton editar).
function editarPelicula(tr, pelicula) {
  tr.innerHTML = `
    <td colspan="6">
      <form class="edit-form">
        <label>Título: <input type="text" name="titulo" value="${pelicula.titulo}" required></label>
        <label>Año: <input type="number" name="año" value="${pelicula.año}" required></label>
        <label>Descripción: <textarea name="descripcion" required>${pelicula.descripcion}</textarea></label>
        <label>Género: <input type="text" name="genero" value="${pelicula.genero}" required></label>
        <label>URL de la foto: <input type="url" name="urlFoto" value="${pelicula.urlFoto}" required></label>
        <button type="submit">Guardar</button>
      </form>
    </td>
  `;

  const editForm = tr.querySelector(".edit-form");
  editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    pelicula.titulo = editForm.elements.titulo.value.trim();
    pelicula.año = parseInt(editForm.elements.año.value.trim());
    pelicula.descripcion = editForm.elements.descripcion.value.trim();
    pelicula.genero = editForm.elements.genero.value.trim();
    pelicula.urlFoto = editForm.elements.urlFoto.value.trim();
    
    
    renderizarConFiltro();
  });
}








// Genera y muestra una tabla HTML con las películas recibidas.
function mostrarPeliculaList(peliculaData) {
  peliculasList.innerHTML = ""; 
    //Creo el encabezado
  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>Título</th>
        <th>Año</th>
        <th>Foto</th>
        <th>Descripción</th>
        <th>Género</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody id="tabla-body"></tbody>
  `;
  
  peliculasList.appendChild(table);
  const tbody = document.getElementById("tabla-body");
    //Creo los datos dentro de la tabla.
  peliculaData.forEach((pelicula) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${pelicula.titulo}</td>
      <td>${pelicula.año}</td>
      <td><img src="${pelicula.urlFoto}" alt="${pelicula.titulo}" width="100"></td>
      <td>${pelicula.descripcion}</td>
      <td>${pelicula.genero}</td>
      <td>
        <button class="delete-button">Eliminar</button>
        <button class="edit-button">Editar</button>
      </td>
    `;

    // Event listeners para los botones de acción
    tr.querySelector(".delete-button").addEventListener("click", () => eliminarPelicula(pelicula));
    tr.querySelector(".edit-button").addEventListener("click", () => editarPelicula(tr, pelicula));

    tbody.appendChild(tr);
  });
}


//Buscar por nombre.
function filtrarPorTitulo() {
  // Tomamos el valor del input
  const texto = document.getElementById('filtroTitulo').value.toLowerCase();
  
  // Filtro las películas que contienen el texto
  const filtradas = peliculas.filter(p => p.titulo.toLowerCase().includes(texto));
  
  // Renderizo resultados en un contenedor
  const contenedor = document.getElementById('peliculas-filtradas');
  contenedor.innerHTML = filtradas.map(p => `<p>${p.titulo}</p>`).join('');
}

//ESTO ES SOLO ONINPUT Y CLICK FUERA DE BUSCAR.
document.addEventListener('click', (e) => {
  const contenedor = document.getElementById('peliculas-filtradas');
  if (!contenedor.contains(e.target) && e.target.id !== 'filtroTitulo') {
    contenedor.innerHTML = ''; // oculta la lista al hacer clic fuera
  }
});

// document.addEventListener("click", (e) =>{
//   const seleccionar = document.createElement("a");

  
// })


// INICIALIZACIÓN

mostrarPeliculaList(peliculas);


// ESTO ES EL FORMULARIO DE ENTRADA.
peliculasForm.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const titulo = event.target.elements.titulo.value.trim();
  const año = parseInt(event.target.elements.anio.value.trim());
  const descripcion = event.target.elements.descripcion.value.trim();
  const urlFoto = event.target.elements.foto.value.trim();
  const genero = event.target.elements.genero.value.trim();
  const añoActual = new Date().getFullYear(); // obtiene el año actual
  
//Alerta sweet para exito submit
  Swal.fire({
    title: "¡Película agregada!",
    text: `${titulo} se agregó correctamente a la lista.`,
    width: 600,
    padding: "3em",
    color: "#716add",
    background: "#fff url(/images/trees.png)", 
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
  });

  // Alerta sweet para requerido año mas 1800.
 if (!año || año < 1800 || año > añoActual) {
  Swal.fire({
    title: "Año inválido",
    text: `El año debe estar entre 1800 y ${añoActual} y tener 4 cifras`,
    icon: "warning", // 
    confirmButtonText: "Ok"
  });
  return; // detiene el submit si el año no es válido
}


  // Validación de los demás campos
  if (titulo && descripcion && genero && urlFoto) {
    const newPelicula = { titulo, año, descripcion, genero, urlFoto };
    peliculas.push(newPelicula);
    renderizarConFiltro();
    event.target.reset();
  } else {
    alert("Por favor complete todos los campos");
  }
});

// Select: Filtrar por género
filtroGenero.addEventListener("change", renderizarConFiltro);
