import React from "react"
// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux"

import SearchComponent from "./SearchComponent/SearchComponent.jsx"
import ResultComponent from "./ResultComponent/ResultComponent.jsx"


export default function Search() {

    React.useEffect(() => {
        if (!localStorage.getItem("accessToken")) {
            // eslint-disable-next-line no-restricted-globals
            location.replace(location.origin)
        }
    }, [])

    const searchStart = useSelector(state => state.objectSearchRequest.searchStart);

    return(
        <>
        { searchStart == 1 ?
            <ResultComponent/> :
            <SearchComponent/>
        }
        </>
    )
} 