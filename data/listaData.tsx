
export type Item = {
    id: number;
    nome: string;
    image: string;
    price: string; 
}

export const listaData: Item[] = [
    { id: 1, nome: 'Nissan GTR', image: '/imagens/modelo1.JPEG', price: '2,000,000'},
    { id: 2, nome: 'Alfa Romeo', image: '/imagens/modelo2.JPEG', price: '1,000,000' },
    { id: 3, nome: 'BMW M8', image: '/imagens/modelo3.JPEG', price: '820,000'},
    { id: 4, nome: 'Mustang 69', image: '/imagens/modelo4.JPEG', price: '750,000'},
    { id: 5, nome: 'LA FERRARI', image: '/imagens/modelo5.JPEG', price: '8,000,000'}
]