import React from 'react';

import {createContext, useState} from 'react';

const PageContext = createContext();

const PageProvider = ({children}) => {
    const [previousPage, setPreviousPage] = useState('Sumário');

    return(
        <PageContext.Provider value={{previousPage,setPreviousPage}}>
            {children}
        </PageContext.Provider>
    );
};

export {PageContext,PageProvider};