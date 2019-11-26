import React, { Component } from 'react'
import { NavBar } from '../../components'
import trim from 'trim';
import { Modal, Button, Form, Container, Row, Col } from 'react-bootstrap'
import { db } from '../../firebase'
import {
    Spinner,
} from 'react-bootstrap';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.idCount = 0;
        this.state = {
            data: [],
            dataRef: [],
            isLoading: false,
            id: '',
            name: '',
            address: '',
            time: '',
            order: '',
            lastId: '',
            isEdit: false,
            idToEdit: '',
        }
    }
    BeforSubmit = async () => {
        this.setState({
            isEdit: false,
            name: '',
            address: '',
            time: '',
            order: '',
        })
        this.handleModal()
    }

    onSubmit = async () => {
        const { data } = this.state;
        await db.collection('test').doc(data ? this.state.lastId + 1 + '' : '0').set({
            id: this.state.lastId + 1,
            name: this.state.name,
            address: this.state.address,
            time: this.state.time,
            order: this.state.order,
        })
        this.getData();
        this.handleModal();
    }

    getData = async () => {
        this.setState({ isLoading: true })
        await db.collection('test').get()
            .then(async querySnapshot => {
                console.log('get')
                const data = await querySnapshot.docs.map(doc => doc.data());
                // console.log(data);
                this.setState({ data, isLoading: false, isLoading: false, dataRef: data });
                const sortedData = this.state.dataRef.sort((a, b) => {
                    if (this.state.dataRef)
                        return a.id - b.id
                    else return []
                })
                let lastId;
                if (!!sortedData.length) {
                    lastId = sortedData[sortedData.length - 1].id
                }
                else
                    lastId = 0
                this.setState({ lastId })

            })
    }
    onDelete = async (id) => {
        await db.collection('test').doc(id + '').delete();
        await this.getData();
    }
    componentDidMount = async () => {
        await this.getData()
    }
    renderTable = () => {
        const tempData = this.state.data.sort((a, b) => {
            return a.id - b.id;
        })
        return tempData.map((e, i) => {
            return <div key={i} style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 8, minWidth: 500 }}>
                {/* <div style={{ width: '14%' }}>{e.id}</div> */}
                <div style={{ width: '18%' }}>{e.name}</div>
                <div style={{ width: '18%' }}>{e.address}</div>
                <div style={{ width: '18%' }}>{e.time}</div>
                <div style={{ width: '18%' }}>{e.order}</div>
                <div id="move1" style={{ width: '5%' }}>
                    {/* <Button variant="outline-danger" onClick={() => this.onDelete(e.id)} disabled={this.state.isEdit}> */}
                    {!!!this.state.isLoading &&
                        <Button variant="outline-danger" onClick={() => this.onDelete(e.id)} >
                            <i class="fa fa-trash"></i>
                        </Button>
                    }
                </div>
                <div style={{ width: '0%' }}>
                    {!!!this.state.isLoading &&
                        <Button variant="outline-warning" onClick={() => this.handleEdit(e)}>
                            <i class="fa fa-edit"></i>
                        </Button>
                    }
                </div>
            </div>
        })
    }
    handleEdit = (e) => {
        console.log('get e from table', e)
        this.setState({
            name: e.name,
            address: e.address,
            time: e.time,
            order: e.order,
            isEdit: true,
            idToEdit: e.id,
        })
        this.handleModal();
    }
    onEdit = async () => {
        await db.collection('test').doc(+this.state.idToEdit + '').set({
            id: this.state.idToEdit,
            name: this.state.name,
            address: this.state.address,
            time: this.state.time,
            order: this.state.order,
        })
        this.setState({
            isEdit: false,
            name: '',
            address: '',
            time: '',
            order: '',
            idToEdit: '',
        })
        this.getData();
        this.handleModal();
    }

    handleModal = (id, e) => {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }



    render() {
        console.log(this.state.isEdit)
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', paddingRight: '20px' }}>
                {/* <div>lasted id is {this.state.lastId + 1}</div> */}
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
                    <div style={{ width: '10%' }}>
                        {/* <input  /> */}
                    </div>
                    {/* <div style={{ width: '18%' }}>
                        <input placeholder="Name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                    </div>
                    <div style={{ width: '18%' }}>
                        <input placeholder="Address"  value={this.state.address} onChange={e => this.setState({ address: e.target.value })} />
                    </div>
                    <div style={{ width: '8%' }}>
                        <input placeholder="Time"  type="time" value={this.state.time} onChange={e => this.setState({ time: e.target.value })} />
                    </div>
                    <div style={{ width: '15%' }}>
                        <input placeholder="Order" value={this.state.order} onChange={e => this.setState({ order: e.target.value })} />
                    </div> */}

                    <div style={{ width: '14%' }}></div>
                </div>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', marginTop: 31, minWidth: 500 }}>
                    {/* <div id = "font" style={{ width: '14%' }}>id</div> */}
                    <div id="font" style={{ width: '18%' }}>name</div>
                    <div id="font" style={{ width: '18%' }}>address</div>
                    <div id="font" style={{ width: '18%' }}>time</div>
                    <div id="font" style={{ width: '18%' }}>order</div>
                    <div style={{ width: '11%' }}>
                        {
                            this.state.isLoading ?
                                <Button id="butin" variant="primary">
                                    <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                </Button>
                                :
                                <Button id="butin" onClick={() => this.BeforSubmit()}>Add</Button>
                        }
                    </div>
                    <div style={{ width: '14%' }}></div>
                </div>
                <div style={{ height: 1, backgroundColor: 'grey', width: '100%', marginTop: 16, marginBottom: 16 }}></div>
                <div style={{ width: '100%', minWidth: 500 }}>
                    {this.renderTable()}
                    <Modal show={this.state.modalVisible} onHide={() => this.handleModal()}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.isEdit ? 'Edit Information' : 'Information'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control onChange={e => this.setState({ name: e.target.value })} value={this.state.name} type="text" placeholder="enter name" />

                                    <Form.Label>Address</Form.Label>
                                    <Form.Control onChange={e => this.setState({ address: e.target.value })} value={this.state.address} type="text" placeholder="enter address" />

                                    <Form.Label>Time</Form.Label>
                                    <Form.Control onChange={e => this.setState({ time: e.target.value })} value={this.state.time} type="time" placeholder="enter time" />

                                    <Form.Label>Order</Form.Label>
                                    <Form.Control onChange={e => this.setState({ order: e.target.value })} value={this.state.order} type="text" placeholder="enter order" />

                                </Form.Group>
                            </Form>

                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={() => this.handleModal()}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={() => { this.state.isEdit ? this.onEdit() : this.onSubmit() }}>
                                {this.state.isEdit ? 'Save Changes' : 'Submit'}
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        )
    }
}
