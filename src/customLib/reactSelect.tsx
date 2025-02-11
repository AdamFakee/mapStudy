import { StylesConfig  } from 'react-select'

export const selectStyles: StylesConfig<any> = {
    container: (styles) => ({ ...styles, borderRadius: 8, width: '100%', }),
    menu: (styles ) => ({ ...styles, borderRadius: 8, backgroundColor: '#fff', color: 'blue', padding: 0}),
    menuList: (styles ) => ({ ...styles, borderRadius: 8, backgroundColor: '#fff', margin: 0, padding: 0 }),

    indicatorSeparator: () => ({ display: 'none'}),
    control: () => ({  backgroundColor: '#f2f5f9', borderWidth: '1px', color: '#295779', boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)", height: 44, borderColor: 'transparent', borderRadius: 8, flexGrow: 1, display: 'flex', outline: 0, paddingLeft: '1%'}),
    option: (styles, { isFocused }) => {
    //   const color = chroma(data.color);
        return {
        ...styles,
        backgroundColor: isFocused ? '#0000000F' : '',
        color: '#295779', 
        ':active': {
            ...styles[':active'],
            backgroundColor: '#0000001C'
        },
        };
    },
    placeholder: (styles) => ({ ...styles, color: '#99AEBE' }),
    singleValue: (styles) => ({ ...styles, color: '#295779' }),
};