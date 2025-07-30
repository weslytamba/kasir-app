import React, { Component } from "react";
import { Hasil, ListCategories, Menus1, NavbarComponent } from "./component";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { API_URL } from "./utils/constants";
import axios from "axios";


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      categoriYangDipilih: 'Makanan'
    }
  }

  componentDidMount() {
    axios
    .get(API_URL +"products?category.nama=" + this.state.categoriYangDipilih)
    .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log("Error ya ", error);
      })
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: []
    })

    axios
    .get(API_URL +"products?category.nama=" + value)
    .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log("Error ya ", error);
      })

  }

  render() {
    const { menus, categoriYangDipilih } = this.state
    return (
      <div className="App">
        <NavbarComponent> </NavbarComponent>
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories changeCategory={this.changeCategory} categoriYangDipilih={categoriYangDipilih}/>
              <Col>
                <h4><strong>Daftar Produk</strong></h4>
                <hr />
                <Row>
                  {menus && menus.map((menu) => (
                    <Menus1
                      key={menu.id}  // Pindahkan key ke sini (sebagai prop)
                      menu={menu}
                    />
                  ))}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

