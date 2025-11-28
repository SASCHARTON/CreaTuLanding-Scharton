import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <header style={{ 
            display: 'flex', 
            justifyContent: 'space-around', 
            alignItems: 'center', 
            padding: '10px', 
            backgroundColor: '#333', 
            color: 'white' 
        }}>
            {}
            <h1>MiTiendaOnline</h1>

            {}
            <nav>
                <a href="#" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Categoría 1</a>
                <a href="#" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Categoría 2</a>
                <a href="#" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Ofertas</a>
            </nav>

            {}
            <CartWidget />
        </header>
    )
}

export default NavBar;