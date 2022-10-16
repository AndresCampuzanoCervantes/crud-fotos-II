import { createTheme } from "@mui/material";
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
            <img src={imagen} alt={name} className="rounded-circle" />
        </div>
    )
};

export const columnsGridPinture = [
    {
        field: 'imagen',
        headerName: '',
        minWidth: 170,
        renderCell: renderImagen,
        align:"center",
    },
    {
        field: 'name',
        headerName: 'Nombre',
        minWidth: 150
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
];