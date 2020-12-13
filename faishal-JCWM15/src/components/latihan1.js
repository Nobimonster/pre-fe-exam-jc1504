import React from 'react'
import { act } from 'react-dom/test-utils'
import { connect } from 'react-redux'
import { Input } from "reactstrap"
import { fetchData, pekerjaanAction } from "../Redux/Action"
import Axios from "axios"
import { api_url } from "../Helper/API"

class Home extends React.Component {
    //STATE HARUS ADA
    state = {
        users: {
            nama: "",
            usia: "",
            pekerjaan: "",
        }
    }

    //I.. IS.. ISA.. ISAL..
    //...(spread)
    onChangeInput = (e) => {
        this.setState(
            {
                users: {
                    ...this.state.users,
                    [e.target.id]: e.target.value
                }
            }
        )
    }

    // USERS bisa diganti {nama, usia, pekerjaan}
    addData = () => {
        const { users } = this.state
        this.props.pekerjaanAction(users)
        this.props.fetchData()
    }

    renderFetchData = () => {

    }

    //BIAR MASIH ADA TERUS DATA NYA
    // componentDidMount = () => {
    //     const { , } = this.props
    //     fetchData()
    // }

    // deleteCategory = (id) => {
    // const { deleteCartAction, userID } = this.props
    // deleteCartAction(id, userID)
    //   }

    render = () => {
        return (
            <div>
                <h1>SOAL 1</h1>
                <div className='row'>
                    <div className='col-md-4 mb-4'>
                        <select className='form-control'>
                            <option>Filter By Pekerjaan</option>
                        </select>
                    </div>
                </div>
                <table className='table mb-4'>
                    <thead>
                        <tr>
                            <td>Nama</td>
                            <td>Usia</td>
                            <td>Pekerjaan</td>
                            <td>Act</td>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
                <div className='row'>
                    <div className='col-md-3'>
                        <Input
                            placeholder="Nama"
                            id="nama"
                            type="text"
                            onChange={this.onChangeInput}
                            style={{ textAlign: "center" }}
                        />
                    </div>
                    <div className='col-md-3'>
                        <Input
                            placeholder="Usia"
                            id="usia"
                            type="number"
                            onChange={this.onChangeInput}
                            style={{ textAlign: "center" }}
                        />
                    </div>
                    <div className='col-md-3'>
                        <Input
                            placeholder="Pekerjaan"
                            id="pekerjaan"
                            type="text"
                            onChange={this.onChangeInput}
                            style={{ textAlign: "center" }}
                        />
                    </div>
                    <div className='col-md-3'> <input onClick={this.addData} type='button' className='form-control btn-info' value='add Data' /> </div>
                </div>
            </div>
        )
    }
}

//pake null dulu karena belum ambil data darimana pun
export default connect(null, { pekerjaanAction, fetchData })(Home) 