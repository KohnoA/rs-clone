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
            if(!(err instanceof AxiosError)) return
            let message: string = err.message
            if (err.request.status === 0) {
                message += '. It`s too many requests, please try later.'
            }
            console.log(err)
            setIsLoading(false)
            setError(message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error] as const
}
