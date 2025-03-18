import Link from "next/link";

function Header() {
    return (
        <header>
            <div className="container">
                <h1>Concessionaria</h1>
            </div>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/exibirLista">Lista de Carros</Link></li>
                    <li><Link href="/sobre">Sobre</Link></li>
                    <li><Link href="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
