import axios, { AxiosError } from 'axios';

export default class RecipeService {
    static async getRecipes(url: string) {
        try {
            const response = await axios.get(url)
            return response.data
        } catch (err: unknown) {
            if(err instanceof AxiosError && err.request.status === 404) {
                console.error(`Error has occured, ${err}`)
            }
            if(err instanceof Error || err instanceof AxiosError) {
                console.error(err.name)
            }
        }
    }
}
