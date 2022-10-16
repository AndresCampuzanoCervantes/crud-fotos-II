import { AccountCircle, LocationCityRounded, Phone, PriceChange, Description, Pinterest, Add, Cancel, } from "@mui/icons-material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { Alert, Button, InputAdornment, TextField } from "@mui/material";
import { collection, addDoc, updateDoc} from "firebase/firestore"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../structure/firebase";
import axios from "axios";
import dayjs from "dayjs";
import 'dayjs/locale/es';

const Form = () => {
    const history = useNavigate();
    const [name, setName] = useState('');
    const [author, setAuthor] = useState('');
    const [city, setCity] = useState('');
    const [captureDate, setCaptureDate] = useState(dayjs());
    const [phone, setPhone] = useState('');
    const [price, setPrice] = useState('$');
    const [imagen, setImagen] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (error) {
            validateFields();
        }
    }, [name, author, city, captureDate, phone, price, description]);

    useEffect(() => {
        getImagen()
    }, []);

    const getImagen = () => {
        axios.get("https://picsum.photos/300")
            .then(({ request }) => {
                setImagen(request.responseURL);
            }).catch((error) => {
                console.error(error);
            })
    }

    const PesoFormat = (number) => {
        const operateNum = number.replaceAll(',', '')
            .replaceAll('$', '')
            .split('').reverse()
        let result = [], len = operateNum.length
        for (var i = 0; i < len; i++) {
            result.push(operateNum[i])
            if (((i + 1) % 3 === 0) && (i !== len - 1)) {
                result.push(',')
            }
        }

        setPrice('$' + result.reverse().join(''))
    }

    const soloNumeros = (e) => {
        const key = e.charCode;
        if (!(key >= 48 && key <= 57)) {
            e.preventDefault();
        }
    }

    const validateFields = () => {
        if (name.length === 0) {
            setErrorMessage("Debe llenar el campo de Nombre.");
            setError(true);
            return true;
        }

        if (author.length === 0) {
            setErrorMessage("Debe llenar el campo de Autor.");
            setError(true);
            return true;
        }

        if (city.length === 0) {
            setErrorMessage("Debe llenar el campo de Ciudad.");
            setError(true);
            return true;
        }

        if (captureDate.length === 0) {
            setErrorMessage("Debe llenar el campo de Fecha de captura.");
            setError(true);
            return true;
        }

        if (phone.length === 0) {
            setErrorMessage("Debe llenar el campo de Teléfono.");
            setError(true);
            return true;
        }

        if (price.length === 0) {
            setErrorMessage("Debe llenar el campo de Costo.");
            setError(true);
            return true;
        }

        if (description.length === 0) {
            setErrorMessage("Debe llenar el campo de Descripción.");
            setError(true);
            return true;
        }

        return false;
    }

    const handelName = (e) => {
        setName(e.target.value);
        if (error) {
            validateFields();
        }
    }

    const handelAuthor = (e) => {
        setAuthor(e.target.value);
        if (error) {
            validateFields();
        }
    }

    const handelCity = (e) => {
        setCity(e.target.value);
        if (error) {
            validateFields();
        }
    }

    const handelCaptureDate = (e) => {
        setCaptureDate(e);
        if (error) {
            validateFields();
        }
    }

    const handelPhone = (e) => {
        if (e.target.value.length <= 10) {
            setPhone(e.target.value);
            if (error) {
                validateFields();
            }
        } else {
            e.preventDefault();
        }
    }

    const handelPrice = (e) => {
        PesoFormat(e.target.value);
        if (error) {
            validateFields();
        }
    }

    const handelDescription = (e) => {
        setDescription(e.target.value);
        if (error) {
            validateFields();
        }
    }

    const handelSubmit = async(e) => {
        try {
            e.preventDefault();

            if (validateFields()) {
                return;
            } else {
                setError(false);
                setErrorMessage('');
            }

            const newPictureSale = {
                name,
                author,
                city,
                captureDate: captureDate.format('DD/MM/YYYY'),
                phone,
                price,
                description,
                imagen
            }
            const data = await addDoc(collection(db,'pictureSale'),newPictureSale);

            if (data.id) {
                history("/");
                return;
            }
            throw new Error("Error al momento de registrar.");
        } catch (error) {
            console.error(error);
        }
    }
    //onSubmit={modoEdicion ? editarFrutas : guardarFrutas}

    return (
        <form onSubmit={handelSubmit}>
            <div className="d-flex flex-column col-11 justify-content-center">
                {
                    error && (
                        <Alert variant="filled" severity="error">
                            <strong>Error. </strong>
                            {errorMessage}
                        </Alert>
                    )
                }
                {
                    imagen.length > 0 ? (
                        <div className="text-center">
                            <img src={imagen} alt={name} height={200} width={200} className="rounded-circle" />
                        </div>
                    ) : (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border loading" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )
                }
                <TextField
                    label="Nombre"
                    variant="standard"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Pinterest />
                            </InputAdornment>
                        ),
                    }}
                    className="m-2 mt-4"
                    onChange={handelName}
                    value={name}
                    error={error && name.length === 0}
                />
                <TextField
                    label="Autor"
                    variant="standard"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    className="m-2 mt-4"
                    onChange={handelAuthor}
                    value={author}
                    error={error && author.length === 0}
                />
                <TextField
                    label="Ciudad"
                    variant="standard"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocationCityRounded />
                            </InputAdornment>
                        ),
                    }}
                    className="m-2"
                    onChange={handelCity}
                    value={city}
                    error={error && city.length === 0}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
                    <DatePicker
                        disableFuture
                        label="Fecha de captura"
                        views={["year", "month", "day"]}
                        value={captureDate}
                        onChange={handelCaptureDate}
                        renderInput={(params) => < TextField  {...params} variant="standard" className="m-2" error={error && captureDate.length === 0} />}
                    />
                </LocalizationProvider>
                <TextField
                    label="Teléfono"
                    variant="standard"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Phone />
                            </InputAdornment>
                        ),
                    }}
                    className="m-2"
                    onKeyPress={soloNumeros}
                    onChange={handelPhone}
                    value={phone}
                    error={error && phone.length === 0}
                />
                <TextField
                    label="Costo"
                    variant="standard"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PriceChange />
                            </InputAdornment>
                        ),
                    }}
                    className="m-2"
                    onKeyPress={soloNumeros}
                    onChange={handelPrice}
                    value={price}
                    error={error && price.length === 1}
                />
                <TextField
                    label="Descripción"
                    variant="standard"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Description />
                            </InputAdornment>
                        ),
                    }}
                    multiline
                    rows={2}
                    className="m-2 mb-4"
                    onChange={handelDescription}
                    value={description}
                    error={error && description.length === 0}
                />
                <div>
                    <Button
                        variant="contained"
                        className="float-end mx-4"
                        color="primary"
                        type="submit"
                        startIcon={<Add />}
                    >
                        Registrar
                    </Button>
                    <Button
                        variant="contained"
                        className="float-end"
                        color="warning"
                        onClick={() => {
                            history("/");
                        }}
                        startIcon={<Cancel />}
                    >
                        Cancelar
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default Form;
