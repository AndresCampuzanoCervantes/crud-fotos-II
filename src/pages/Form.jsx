import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, InputAdornment, TextareaAutosize } from '@mui/material';
import { AccountCircle, LocationCityRounded, Edit, Phone, PriceChange, Description } from '@mui/icons-material';

const dataTest = {
    id: 1,
    name: 'name',
    city: 'nombre',
    price: '$1',
    description: 'Aliquam dapibus, lorem vel mattis aliquet, purus lorem tincidunt mauris, in blandit quam risus sed ipsum Aliquam dapibus, Aliquam dapibus, lorem vel mattis aliquet, purus lorem tincidunt mauris, in blandit quam risus sed ipsum lorem vel mattis aliquet, purus lorem tincidunt mauris, in blandit quam risus sed ipsum Aliquam dapibus, lorem vel mattis aliquet, purus lorem tincidunt mauris, in blandit quam risus sed ipsum',
    author: 'sadf',
    phone: 'asdf'
}
const Form = () => {
    return (
        <form >
            <div className='d-flex flex-column col-11 justify-content-center'>
                <TextField
                    label="Nombre"
                    variant="standard"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    className='m-2 mt-4'
                />
                <TextField
                    label="Ciudad"
                    variant="standard"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                < LocationCityRounded />
                            </InputAdornment>
                        ),
                    }}
                    className='m-2'
                />
                <TextField
                    label="Autor"
                    variant="standard"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                < Edit />
                            </InputAdornment>
                        ),
                    }}
                    className='m-2'
                />
                <TextField
                    label="Teléfono"
                    variant="standard"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                < Phone />
                            </InputAdornment>
                        ),
                    }}
                    className='m-2'
                />
                <TextField
                    label="Costo"
                    variant="standard"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                < PriceChange />
                            </InputAdornment>
                        ),
                    }}
                    className='m-2'
                />
                <TextField
                    label="Descripción"
                    variant="standard"
                    required
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                < Description />
                            </InputAdornment>
                        ),
                    }}
                    multiline
                    rows={5}
                    className='m-2 mb-4'
                />
                <div>
                    <Button variant="contained" className='float-end mx-4' color="primary">Registrar</Button>
                    <Button variant="contained" className='float-end' color="warning">Cancelar</Button> 
                </div>
            </div>

        </form>

    )
}


export default Form
