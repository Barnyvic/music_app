export const customStyles = {
    table: {
        style: {
            display: 'table',
            backgroundColor: 'transparent',
            padding: '22px'
            //borderRadius: "5px",
        }
    },
    headRow: {
        style: {
            display: 'none'
        }
    },
    headCells: {
        style: {
            fontWeight: 500,
            fontSize: '16px',
            color: 'white'
        }
    },
    rows: {
        style: {
            width: '100%',
            fontWeight: 500,
            fontSize: '16px',
            background: '#33373b5e',
            color: 'white',
            borderRadius: '5px',
            marginBottom: '10px',
            paddingTop: '10px',
            paddingBottom: '10px',
            '&:not(:last-of-type)': {
                paddingTop: '10px',
                paddingBottom: '10px',
                marginBottom: '10px',
                borderRadius: '15px',
                borderBottomStyle: 'none',
                backdropFilter: 'blur(5px)'
            },
            '&:hover': {
                cursor: 'pointer'
            }
        }
    },
    pagination: {
        style: {
            borderTopStyle: 'none'
        }
    }
};
