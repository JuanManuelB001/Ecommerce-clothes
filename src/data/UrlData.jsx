import { useEffect, useState } from "react";

export function UrlData({ path }) {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://devsapihub.com/api-ecommerce/`)
          if(!response.ok){
            console.log("Error peticion.")
          }
          const data = await response.json()
          setData(data);
        
      } catch (error) {
        console.log(`Error: ${error}`);
      } finally {
        
      }
    };
    // LLAMAR A LA FUNCION
    fetchData();
  }, []);
  return( data);
}
