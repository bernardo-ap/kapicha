import './ItemCard.css'

const ItemCard = ({imgSrc, nomeProduto, precoProduto }) => {
    return(
        <div className={'item-card-container'}>
            <div className={'img-container'}>
                <img className={'img-fundo'} src={imgSrc} alt=""/>
            </div>
            <div className={'produto-nome-container'}>
                <p>{nomeProduto}</p>
            </div>
            <div className={'preco-container'}>
                {precoProduto}
            </div>
        </div>
    );
}

export default ItemCard;