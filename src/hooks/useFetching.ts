import { AxiosError } from 'axios'
import { useState } from 'react'

export const useFetching = (callback: () => void) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (err: unknown) {
            if(err instanceof AxiosError || err instanceof Error) {
            let message: string = err.message
            if (err instanceof AxiosError && err.request.status === 0) {
                message += '. It`s too many requests, please try later.'
                setError(err.name + ' ' + message)
                setIsLoading(false)
            } else {
                setError(err.name + ' ' + 'was detected.')
                setIsLoading(false)
        }
        }
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error] as const
}
