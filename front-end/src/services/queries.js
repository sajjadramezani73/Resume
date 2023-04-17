import service from "./Api";

export const getAbout = async () => {
    const res = await service.get('/api/user/getUser')
    return res?.data;
} 
