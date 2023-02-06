import { useState } from 'react'

export const useFetching = (callback: () => void) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async (...args: string[]) => {
        try {
            setIsLoading(true)
            await callback(...args as [])
        } catch (err: unknown) {
            if(!(err instanceof Error)) return 
            const message: string = err.message
            setError(message)
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error] as const
}