import { Children, createContext, useEffect } from 'react'
import useFetch from './hooks/use-fetch'
import { getCurrentUser } from './db/apiAuth'

const UrlContext = createContext()

const UrlProvider = ({ Children }) => {

    const {data: user, loading, fn: fetchuser} = useFetch(getCurrentUser)

    const isAthenticated = user?.role === "authenticated";




    return <UrlContext.Provider>
        {Children}
    </UrlContext.Provider>
}

export default UrlProvider