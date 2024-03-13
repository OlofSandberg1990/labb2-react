import React, { useState, useEffect } from 'react'; //Importera useState och useEffect från react-bibiloteket.
import "./Portfolio.css"

import { RingLoader } from 'react-spinners'; //Importerade ett element att ha på laddsidan från "react-spinners" som heter RingLoader.


export default function GitHubDemo() {
    const [posts, setPosts] = useState([]);             //Lägger till en variabel för posts
    const [isLoading, setIsLoading] = useState(true); // Lägg till en tillståndsvariabel för laddningsstatus

    useEffect(() => {           //useEffect för att hämta mina repos via API och "packa upp" dem
        fetch('https://api.github.com/users/OlofSandberg1990/repos')
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {      //Här la jag till en timeout på 5 sekunder (5000 som anges några rader ner) för att simulera en laddningstid.
                setPosts(data);     //uppdatera "posts" med data från GitHub-api:et
                setIsLoading(false); // Sätt laddningsstatus till false när datan har laddats
            }, 5000);
        })
        .catch(error => {
            console.error('Kunde inte läsa data', error);
            setIsLoading(false); // Sätt även laddningsstatus till false vid fel
        });
    }, []);

    if (isLoading) {
        return(         //Här visas laddsidan. Det är även i denna div RingLoader-komponenten stylas och appliceras i laddnings-sektionen.
            <div className='portfolio-loading'>
                <h1>Sidan laddas</h1>
                
                <div className='RL-div'><RingLoader size={200} color="rgba(51, 154, 240, 255)"></RingLoader></div> 
                <h3>Vänligen vänta...</h3>
            </div>
        )
        
    }

    return (
        <>
     <section>
            
        <div className='info-box'>

        <h1>Mina GitHub-projekt</h1>
        <div className='projects'>

            {posts.map(post => (   //Här packas mina gitHub-projekt upp och skapas som länkar med namnet på projekten och desprictions under.
                <div className='projectDiv' key={post.id}>
                <a href={post.html_url} target="_blank" rel="noopener noreferrer"><h3>- {post.name} -</h3></a>
                <p>{post.description}</p>
            </div>
    ))}
        </div>
    </div>
    </section>

    </>
    );
}
