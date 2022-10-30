import { Container, Row } from "react-bootstrap";
import Item from "../Item/Item";

const ItemList = ({products}) => {

    return(
        <Container>
           <Row>
                {products.map((producto) => <Item key={producto.id} prod={producto} />)}       
           </Row>
        </Container>
    );
}

export default ItemList;