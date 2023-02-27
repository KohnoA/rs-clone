import axios, { AxiosError } from 'axios';

export default class RecipeService {
    static async getRecipes(url: string) {
        try {
        const response = await axios.get(url)
        return await response.data
    } catch (err: unknown) {
        if(err instanceof AxiosError && err.request.status === 404)
        console.error(`Error has occured, ${err}`)
    }
    }
}
