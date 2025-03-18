import { listaData } from "@/data/listaData";
import "./detalhesProduto.css";
type detalhesProdutoProps = {
    params: {
        id: string;
    };
};

function detalhesProduto(props: detalhesProdutoProps) {
    const produtoID = parseInt(props.params.id);
    const produto = listaData.find((item) => item.id === produtoID);

    return (
        <div className="pdet">
        <div className="container">
            <div className="produto-card">
                <h2>Mais sobre o Carro</h2>
                <p><strong>ID: </strong> {produto?.id}</p>
                <p><strong>Nome: </strong> {produto?.nome}</p>
                <p><strong>Preço: </strong> {produto?.price}</p>
                <p><img src={produto?.image} alt={produto?.nome} /></p>
            </div>
        </div>
        </div>
    );
}

export default detalhesProduto;
