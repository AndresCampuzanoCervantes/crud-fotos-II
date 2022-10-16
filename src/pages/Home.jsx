import { useState, useEffect, useRef } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton } from '@mui/x-data-grid';
import { columnsGridPinture, theme } from '../structure/data';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';

const dataTest = { 
    id: 1, 
    name: 'name', 
    city: 'nombre', 
    price: '$1', 
    description: 'Aliquam dapibus, lorem vel mattis aliquet, purus lorem tincidunt mauris, in blandit quam risus sed ipsum Aliquam dapibus, Aliquam dapibus, lorem vel mattis aliquet, purus lorem tincidunt mauris, in blandit quam risus sed ipsum lorem vel mattis aliquet, purus lorem tincidunt mauris, in blandit quam risus sed ipsum Aliquam dapibus, lorem vel mattis aliquet, purus lorem tincidunt mauris, in blandit quam risus sed ipsum', 
    author: 'sadf', 
    phone: 'asdf',
    imagen: 'https://picsum.photos/150',
    captureDate:"16/10/2022" 
}
const Home = () => {
    const [rows, setRows] = useState([dataTest]);
    const [loading, setLoading] = useState(false);
    const history = useNavigate();


    const EditToolbar = (props) => {
        const { history } = props;
        const ref = useRef();
        useEffect(() => {
            ref.current.innerHTML = "<span class=\"MuiButton-startIcon MuiButton-iconSizeSmall css-y6rp3m-MuiButton-startIcon\"><svg class=\"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root\" focusable=\"false\" aria-hidden=\"true\" viewBox=\"0 0 24 24\" data-testid=\"AddIcon\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></svg></span>Registrar<span class=\"MuiTouchRipple-root css-8je8zh-MuiTouchRipple-root\"></span>"
        }, [ref])
        return (
            <GridToolbarContainer className='border-bottom'>
                <GridToolbarColumnsButton className='m-2' variant="contained" />
                <GridToolbarColumnsButton color="primary"  startIcon={<AddIcon />} onClick={() => { history("/create") }} variant="contained" className='m-2' ref={referent => ref.current = referent} />
            </GridToolbarContainer>
        );
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ flexGrow: 1 }}>
                    <ThemeProvider theme={theme}>
                        <DataGrid
                            rows={rows}
                            columns={columnsGridPinture}
                            getRowHeight={() => 'auto'}
                            loading={loading}
                            components={{
                                Toolbar: EditToolbar,
                            }}
                            componentsProps={{
                                toolbar: { history },
                            }}
                            disableSelectionOnClick
                        />
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}

export default Home
