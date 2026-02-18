import { useEffect, useState } from "react";

export function UrlData({ path }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
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
        setLoading(false);
        
      }
    };
    // LLAMAR A LA FUNCION
    fetchData();
  }, []);
  return( data);
}
