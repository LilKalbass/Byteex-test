import { client } from "@/lib/sanity";

export const getFeaturedProductsHero = async () => {
    const query = `*[_type == "product" && "Hero" in status[]->name]`
    return await client.fetch(query)
}
export const getFeaturedTestimonial = async () => {
    const query = `*[_type == "item" && status->name == "Active"]`
    return await client.fetch(query)
}


export const getFeaturedProductsAbout = async () => {
    const query = `*[_type == "product" && "About" in status[]->name]`
    return await client.fetch(query)
}


export const getGallery = async () => {
    const query = `*[_type == 'gallery']`
    return await client.fetch(query)
}
export const getTestimonials = async () => {
    const query = `*[_type == 'item']`
    return await client.fetch(query)
}


export const getQAData = async () => {
    const query = `*[_type == 'faqQA']`;
    return await client.fetch(query);
};


export const getCTA = async () => {
    const query = `*[_type == "product" && "CTA" in status[]->name]`
    return await client.fetch(query)
}