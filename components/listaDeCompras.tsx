import { Item } from '../data/listaData';


type listaDeComprasProps = {
    itens: Item[];
}

function listaDeCompras(props: listaDeComprasProps) {
    return (
        <>
            <h2 className="lista-item">Lista de Compra</h2>
            {props.itens.map((item) => (
                <div key={item.id} className="lista-item">
                    <p>{item.nome}</p>
                    <p>R${item.price}</p>
                    <p><img src={item.image} alt={item.nome} /></p>
                    <a href={'/detalhesProduto/' + item.id}>MOSTRAR MAIS</a>
                </div>
            ))}
        </>
    );
}

export default listaDeCompras;
