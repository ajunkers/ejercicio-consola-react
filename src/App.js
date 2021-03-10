import { Button } from 'bootstrap';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container as={"main"} flex={true} className="fondo-contenedor">
        <Row as={"ul"} sm={3} lg={4} className="list-unstyled">
          <Col as={"li"}>
            <Button className="boton gt30">Equipos asigndos a mayores de 30</Button>
          </Col>
          <Col as={"li"}>
            <Button className="boton tarragona">Equipos asignados a personas de Tarragona</Button>
          </Col>
          <Col as={"li"}>
            <Button className="boton provincias">Provincias donde hay equipos</Button>
          </Col>
          <Col as={"li"}>
            <Button className="boton puestos">Puestos de trabajadores con equipo</Button>
          </Col>
          <Col as={"li"}>
            <Button className="boton edad-media">Media de edad de los trabajadores</Button>
          </Col>
          <Col as={"li"}>
            <Button className="boton orden-edad">Equipos ordenados por edad</Button>
          </Col>
          <Col as={"li"}>
            <Button className="boton sobremesa">Equipos de tipo sobremesa</Button>
          </Col>
          <Col as={"li"}>
            <Button className="boton trabajadores-portatil">Trabajadores con equipo portátil</Button>
          </Col>
          <Col as={"li"}>
            <Button className="boton equipos-tipo">Equipos organizados por tipo</Button>
          </Col>
          <Col as={"li"}>
            <Button className="boton portatiles-tarragona">Equipos portátiles asignados en
            Tarragona</Button>
          </Col>
          <Col as={"li"}>
            <Button className="boton resumen">Resumen de equipos asignados</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
