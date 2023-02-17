import { AxiosError } from 'axios'
import { useState } from 'react'

export const useFetching = (callback: () => void) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async (...args: string[]) => {
        try {
            setIsLoading(true)
            await callback(...args as [])
        } catch (err: unknown) {
            if(!(err instanceof AxiosError)) return 
            let message: string = err.message
            if (err.request.status === 0) {
                message += '. It`s too many requests, please try later.'
            }
            setIsLoading(false)
            setError(message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error] as const
}