import { useEffect, useState } from "react";

export default function Banner() {
    
    const handleSeeMore = () => {
        // Obtén la referencia del componente al que quieres hacer scroll
        const targetComponent = document.getElementById("ProductsContainer");

        // Hace scroll suavemente hacia el componente
        targetComponent.scrollIntoView({ behavior: "smooth" });
    }
    
    const [num, setNum] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setNum((prevNum) => (prevNum + 1) % 5); // 5 es el número total de imágenes
        }, 2000); // Cambié el intervalo a 5 segundos

        // Limpia el temporizador al desmontar el componente
        return () => clearInterval(intervalId);
    }, []); // Deja el array de dependencias vacío para que solo se ejecute una vez al montar el componente 

    return (
        <div className='w-full flex flex-row gap-2 h-screen items-center justify-evenly bg-slate-100'>
            <img className="w-1/2 mt-40 p-10" src={`../../../public/galeria/imagen${num}.svg`} alt='img_banner' />
            <div className="flex flex-col gap-8 w-1/3 p-10 mt-40">
                <h3 className="text-3xl font-black">Welcome to Code Store!</h3>
                <p className="w-full">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa corporis maiores doloribus ea similique excepturi quaerat nihil, architecto tenetur, ducimus beatae, suscipit quis debitis a. Amet aliquam alias suscipit sequi?</p>
                <button className="bg-sky-700 text-zinc-100 p-2 rounded hover:bg-sky-600  hover:shadow-lg transition-all delay-50 w-full my-4" onClick={handleSeeMore}>See More!</button>
            </div>
        </div>
    )
}
