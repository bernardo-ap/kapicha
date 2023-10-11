import ItemCard from "../../components/ItemCard/ItemCard";
import './Home.css'
const Home = () => {
    let itens = [
        { id: 1, imgSrc: 'https://cdn.sistemawbuy.com.br/arquivos/eec5b73b56743c2b951d1ded87625099/produtos/64cd69823f640/microcerto-ryzen5-5600g-16gb-ssd-1tb-tdagger-11-64cd69827747c.png', nome: 'Item 1', preco: 'R$ 10.00' },
        { id: 2, imgSrc: 'https://shopinfo.vteximg.com.br/arquivos/ids/1312466-400-400/1.png?v=637781577574470000', nome: 'Pc normal', preco: 'R$ 20.00' },
        { id: 3, imgSrc: 'https://bytechnet.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/a/gabinete-odyssey.png', nome: 'Pc Brabão', preco: "R$ 5499,99"},
        { id: 4, imgSrc: 'https://bytechnet.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/a/gabinete-odyssey.png', nome: 'Pc Brabão', preco: "R$ 5499,99"},
        { id: 5, imgSrc: 'https://bytechnet.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/a/gabinete-odyssey.png', nome: 'Pc Brabão', preco: "R$ 5499,99"},
        { id: 6, imgSrc: 'https://bytechnet.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/a/gabinete-odyssey.png', nome: 'Pc Brabão', preco: "R$ 5499,99"},
        { id: 7, imgSrc: 'https://bytechnet.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/a/gabinete-odyssey.png', nome: 'Pc Brabão', preco: "R$ 5499,99"},
        { id: 8, imgSrc: 'https://bytechnet.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/a/gabinete-odyssey.png', nome: 'Pc Brabão', preco: "R$ 5499,99"},
        { id: 9, imgSrc: 'https://bytechnet.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/a/gabinete-odyssey.png', nome: 'Pc Brabão', preco: "R$ 5499,99"}
    ];

    return(
        <div>
            <div className={'itens-container'}>
                {itens.map(item => (
                        <ItemCard imgSrc={item.imgSrc} nomeProduto={item.nome} precoProduto={item.preco}/>
                ))}
            </div>
        </div>
    );
}

export default Home;