import React, { useState, useContext, createContext } from 'react'

const VideosRouteContext = createContext()

export const VideosRouteProvider = ({ children }) => {
    const [route, setRoute] = useState("videos");

    return(
        <VideosRouteContext.Provider value={{ route, setRoute }}>
            {children}
        </VideosRouteContext.Provider>
    )
}

export const useVideosRoute = () => useContext(VideosRouteContext) 