import { useEffect, useState } from "react";

export function UrlData({ path }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://devsapihub.com/api-ecommerce/`)
          if(!response.ok){
            console.log("Error peticion.")
          }
          const data = await response.json()
          console.log(`Los Datos del Servidor son:`)
          console.log(data)
      } catch (error) {
        console.log(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    // LLAMAR A LA FUNCION
    fetchData();
  }, []);
  return <div>{loading && <p>consultando API...</p>}</div>;
}
