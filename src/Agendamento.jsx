import bgHome from "./pexels-tiger-lily-4483610.jpg";

export default function Agendamento() {
  return (
    <section
      className="home"
      style={{ backgroundImage: `url(${bgHome})` }}
    >
        <div className="overlay"></div>
      <div className="home-content">
        <h1>Bem-vindo</h1>
        <p>Conteúdo principal da Home</p>
      </div>
    </section>
  );
}
