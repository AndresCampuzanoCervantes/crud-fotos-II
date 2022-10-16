import { Delete, Edit } from "@mui/icons-material";
import { Button, createTheme } from "@mui/material";
import { esES } from "@mui/x-data-grid";


export const theme = createTheme(
    {
        palette: {
            primary: { main: '#1976d2' },
        },
    },
    esES,
);

const renderImagen = ({ row }) => {
    const { imagen, name } = row;
    return (
        <div className="text-center">
            <img src={imagen} alt={name} className="rounded-circle m-2" height={150} width={150} />
        </div>
    )
};

const renderEditButtons = ({ row }) => {
    const { updateDoc, id } = row;

    return (
        <Button variant="contained" startIcon={<Edit />} color="warning" onClick={() => { updateDoc(id) }}>
            Editar
        </Button>
    )
};
const renderDeleteButtons = ({ row }) => {
    const { updateDoc, id } = row;

    return (
        <Button variant="contained" startIcon={<Delete />} color="error" onClick={() => { updateDoc(id) }}>
            Eliminar
        </Button>
    )
};

export const columnsGridPinture = [
    {
        field: 'imagen',
        headerName: '',
        minWidth: 170,
        renderCell: renderImagen,
        align: "center",
    },
    {
        field: 'name',
        headerName: 'Nombre',
        minWidth: 180
    },
    {
        field: 'city',
        headerName: 'Ciudad',
        minWidth: 150
    },
    {
        field: 'captureDate',
        headerName: 'Fecha de Captura',
        minWidth: 150
    },
    {
        field: 'author',
        headerName: 'Autor',
        minWidth: 150
    },
    {
        field: 'phone',
        headerName: 'Teléfono',
        minWidth: 100
    },
    {
        field: 'price',
        headerName: 'Valor',
        minWidth: 100
    },
    {
        field: 'description',
        headerName: 'Descripción',
        minWidth: 412
    },
    {
        field: 'updateDoc',
        headerName: '',
        minWidth: 150,
        renderCell: renderEditButtons,
        align: "center",
    },
    {
        field: 'deleteDoc',
        headerName: '',
        minWidth: 150,
        renderCell: renderDeleteButtons,
        align: "center",
    },
];