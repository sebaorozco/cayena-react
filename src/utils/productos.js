const products = [
    { id: 1, name: "Dulce de leche vegano", marca: "Doña Magdalena.", price: 550, img: "https://i.postimg.cc/BZ85c4WK/dulce-leche-coco-vegan.jpg", stock: 10, cant: 1, category: "celiacos"},
    { id: 2, name: "Premezcla para Falafel", marca: "Natural Pop.", price: 920, img: "https://i.postimg.cc/fTmxpCRW/falafel-natural-pop.jpg", stock: 15, cant: 1, category: "celiacos"},
    { id: 3, name: "Levadura nutricional", marca: "Healthy Waw.", price: 489.99, img: "https://i.postimg.cc/Zq7Ywkk9/levadura-waw.jpg", stock: 20, cant:1, category: "diet"},
    { id: 4, name: "Pasta de almendras s/gluten", marca: "Vrink.", price: 370, img: "https://i.postimg.cc/9XvdLKVN/pasta-almendras-vrink.jpg", stock: 5, cant:1, category: "celiacos"},
    { id: 5, name: "Mix Salado.", marca: "Cayena.", price: 250, img: "https://i.postimg.cc/QtF8P6sf/mix-salado.jpg", stock: 35, cant:1, category: "diet"},
    { id: 6, name: "Arroz Basmati", marca: "India Crown.", price: 720, img: "https://i.postimg.cc/j5BxrzSt/arroz-basmati.jpg", stock: 15, cant:1, category: "diet"},
    { id: 7, name: "Agua de Coco", marca: "Vrink.", price: 270, img: "https://i.postimg.cc/KYvv7GWS/agua-coco.jpg", stock: 5, cant:1, category: "diet"},
    { id: 8, name: "Sésamo Integral molido", marca: "Natural Seed.", price: 250, img: "https://i.postimg.cc/T3xr6bKV/sesamo-integral-molido.jpg", stock: 5, cant:1, category: "celiacos"},
    { id: 9, name: "Galletitas dulces s/ázucar de Limón", marca: "Ceral.", price: 370, img: "https://i.postimg.cc/bN9Z1Bvn/galletas-dulces-ceral.jpg", stock: 23, cant:1, category: "diabeticos"},
    { id: 10, name: "Endulzante natural", marca: "Waw!.", price: 920, img: "https://i.postimg.cc/jSqLc4WF/endulzante-natural.jpg", stock: 5, cant:1, category: "diabeticos"},
    { id: 11, name: "Mermelada endulzada c/stevia", marca: "Cuarto Creciente.", price: 429.99, img: "https://i.postimg.cc/dVWDxZrt/mermelada-cuarto-creciente.jpg", stock: 8, cant:1, category: "diabeticos"},
    { id: 12, name: "Mermelada endulzada c/stevia", marca: "La Tranquilina.", price: 370, img: "https://i.postimg.cc/BvXt9ZB5/mermelada-la-tranquilina.jpg", stock: 5, cant:1, category: "diabeticos"},
    { id: 13, name: "Tintura madre echinacea", marca: "Equinacea.", price: 450, img: "https://i.postimg.cc/pdFxJmBS/tintura-madre-echinacea.jpg", stock: 5, cant:1, category: "salud_belleza"},
    { id: 14, name: "Venorelax gel para piernas", marca: "Botanika esencia.", price: 850, img: "https://i.postimg.cc/7hxk4myv/venorelax-piernas.jpg", stock: 15, cant:1, category: "salud_belleza"},
    { id: 15, name: "Ácido Hialurónico", marca: "Original Green.", price: 600, img: "https://i.postimg.cc/xCG2BBhy/acido-hialuronico.jpg", stock: 25, cant:1, category: "salud_belleza"},
    { id: 16, name: "Suplemento dietario bebible. MCT Oil", marca: "Leguilab.", price: 1170, img: "https://i.postimg.cc/PxnH3d35/mct-oil.jpg", stock: 35, cant:1, category: "salud_belleza"}
]

export const getProducts = () => {
    const promise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        },2000)
    })
    return promise;
};   

export const getProduct = (id) => {
    const promise = new Promise ((resolve, reject) => {
        const result = products.find((prod) => prod.id === parseInt(id))
        setTimeout(() => {
            resolve(result);
        },2000)
    }); 
    
    return promise;
};