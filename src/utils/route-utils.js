import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePrevious = (value) => {
    const ref = useRef()
    useEffect(() => { ref.current = value })

    return ref.current
}

export const useLocationChange = (action) => {
    const location = useLocation()
    const prevLocation = usePrevious(location)
    useEffect(() => {
        action(location, prevLocation)
    }, [location, action, prevLocation])
}