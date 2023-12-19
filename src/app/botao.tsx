export default function Botao() {
  const texto = "Meu texto personalizado";
  const onClick = () => {
    console.log("Botão clicado!");
  };
  return <button onClick={onClick}>{texto}</button>;
}
