import { Children, createContext, useEffect } from 'react'
import useFetch from './hooks/use-fetch'
import { getCurrentUser } from './db/apiAuth'

const UrlContext = createContext()

const UrlProvider = ({ Children }) => {



    return <UrlContext.Provider>
        {Children}
    </UrlContext.Provider>
}

export default UrlProvider