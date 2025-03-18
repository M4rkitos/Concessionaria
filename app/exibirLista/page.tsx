import { listaData } from "@/data/listaData";
import Link from "next/link";
import "./exibirLista.css";

function exibirLista() {
    return (
        <>
            <h1>CARROS DISPONIVEIS</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Carro</th>
                        <th>Preço</th>
                        <th>Detalhe</th>
                    </tr>
                </thead>
                <tbody>
                    {listaData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link href={'/detalhesProduto/' + item.id}>Ver Detalhes</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default exibirLista;
