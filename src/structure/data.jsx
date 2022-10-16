import { createTheme } from "@mui/material";
import { esES } from "@mui/x-data-grid";

export const theme = createTheme(
    {
        palette: {
            primary: { main: '#1976d2' },
        },
    },
    esES, // x-data-grid translations
);

const renderImagen = () => (
    <div className="text-center">
        <img src="https://picsum.photos/200" alt="imagen random" className="rounded-circle" />
    </div>
);

export const columnsGridPinture = [
    {
        field: 'imagen',
        headerName: '',
        minWidth: 220,
        renderCell: renderImagen
    },
    {
        field: 'name',
        headerName: 'Nombre',
        minWidth: 200
    },
    {
        field: 'city',
        headerName: 'Ciudad',
        minWidth: 200
    },
    {
        field: 'author',
        headerName: 'Autor',
        minWidth: 200
    },
    {
        field: 'phone',
        headerName: 'Teléfono',
        minWidth: 125
    },
    {
        field: 'price',
        headerName: 'Valor',
        minWidth: 125
    },
    {
        field: 'description',
        headerName: 'Descripción',
        minWidth: 417
    },
];