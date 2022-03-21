import {useState} from "react";

export const useIsLoading = (action: Function) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<any>();

    const execute = async (...args: any) => {
        try {
            setIsLoading(true)
            await action(...args)
        } catch (e) {
            setError(e);
        } finally {
            setIsLoading(false)
        }
    }

    return [execute, isLoading, error]
}