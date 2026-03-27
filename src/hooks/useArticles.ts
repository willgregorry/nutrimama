import { useQuery } from '@tanstack/react-query';
import { Article } from '@/types/article';

export const fetchArticles = async (): Promise<Article[]> => {
    const response = await fetch('/data/artikel.json');
    if (!response.ok) {
        throw new Error('Failed to fetch articles');
    }
    return response.json();
};

export const useArticles = () => {
    return useQuery({
        queryKey: ['articles'],
        queryFn: fetchArticles,
    });
};
