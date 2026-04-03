import { useQuery } from '@tanstack/react-query'
import { Article } from '@/types/article'
import { apiClient } from '@/lib/axios'

export const fetchArticles = async (): Promise<Article[]> => {
    const response = await apiClient.get('/edu-tools/')
    return response.data.data
}

export const useArticles = () => {
    return useQuery({
        queryKey: ['articles'],
        queryFn: fetchArticles,
    })
}
