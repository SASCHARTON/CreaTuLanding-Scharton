const ItemListContainer = ({ greeting }) => {
    return (
        <div style={{ 
            padding: '40px', 
            textAlign: 'center', 
            backgroundColor: '#f5f5f5' 
        }}>
            {}
            <h2>{greeting}</h2>
            <p>Acá se listarán los productos del catálogo</p>
        </div>
    )
}

export default ItemListContainer;