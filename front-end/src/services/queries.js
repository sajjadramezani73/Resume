import service from "./Api";

export const getAbout = async () => {
    const res = await service.get('/api/about/getAbout')
    return res?.data;
}

export const getExperiences = async () => {
    const res = await service.get('/api/experience/getExperiences')
    return res?.data;
} 
