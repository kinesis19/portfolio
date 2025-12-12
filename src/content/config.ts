import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(), // 날짜는 문자열로 관리
        tags: z.array(z.string()), // 태그는 배열
        image: z.string().optional(), // 이미지는 없으면 비워둠
    }),
});

export const collections = {
    projects: projectsCollection,
};