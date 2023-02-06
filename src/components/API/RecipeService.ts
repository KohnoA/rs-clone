import axios from 'axios';

export default class RecipeService {
    static async getRecipes(url: string) {
        const response = await axios.get(url)
        return await response.data
    } 
}