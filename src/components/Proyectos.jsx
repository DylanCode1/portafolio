import '../styles/Proyectos.css';

function Proyectos() {
  return (
    <section id="proyectos" className="proyectos">
      <h2>Proyectos</h2>
      <div className="proyecto-lista">
        <div className="proyecto">
          <h3>App Control de Gastos</h3>
          <p>Aplicación para registrar y visualizar gastos con React.</p>
          <a className="btn-repo" href="https://github.com/DylanCode1/control-gastos" target="_blank" rel="noopener noreferrer">
            Ver repositorio
          </a>
        </div>

        <div className="proyecto">
          <h3>Cartelera de Películas</h3>
          <p>Consulta de películas utilizando una API pública, construida con React y Vite.</p>
          <a className="btn-repo" href="https://github.com/DylanCode1/cartelera-peliculas" target="_blank" rel="noopener noreferrer">
            Ver repositorio
          </a>
        </div>

        <div className="proyecto">
          <h3>New Project</h3>
          <p>Gestor de tareas con interfaz amigable, usando React.</p>
          <a className="btn-repo" href="https://github.com/DylanCode1/rutas-componentes" target="_blank" rel="noopener noreferrer">
            Ver repositorio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;