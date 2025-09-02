import React, { Component } from 'react'
import { Badge, Col, ListGroup } from 'react-bootstrap'
import { numberWithCommas } from '../utils/comacode';

export default class Hasil extends Component {
    render() {
        const { keranjangs } = this.props
        return (
            <Col md={3} mt={2}>
                <h4><strong>Hasil</strong></h4>
                <hr />
                {keranjangs.length !== 0 && (
                    <ListGroup variant="flush">
                        {keranjangs.map((menuKeranjang) => (
                            <ListGroup.Item>
                                <row>
                                    <Col xs={2}>
                                        <h8>
                                            <Badge pill variant="success">
                                                {menuKeranjang.jumlah}
                                            </Badge>
                                        </h8>
                                    </Col>
                                    <Col>
                                        <h5>{menuKeranjang.product.nama}</h5>
                                        <p>Rp. {numberWithCommas(menuKeranjang.product.harga)}</p>
                                    </Col>
                                    <Col>
                                       <strong className='float-right'>
                                         Rp.{numberWithCommas(menuKeranjang.total_harga)}
                                       </strong>
                                    </Col>
                                </row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
        );
    }
}
