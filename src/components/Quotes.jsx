import React from "react"
import { useState, useEffect } from "react"



function Quotes() {
    const [Index, setIndex] = useState(0)

    const quotes = [
            "A reader lives a thousand lives before he dies… ",
            "When in doubt, go to the library.",
            "To survive, you must tell stories.",
            "I am no bird; and no net ensnares me: I am a free human being",
            "It does not do to dwell on dreams and forget to live",
            "I love the smell of book ink in the morning.",
            "In the end, we’ll all become stories.",
            "Books are a uniquely portable magic."
          ];

      useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        }, 5000);
      
        return () => clearInterval(interval); 
      }, []);
      

   
    return (<>
        <div className="text-3xl text-gray-400">
        <h1>"<i>{quotes[Index]}</i>"</h1>
        </div>
    </>

    )
}

export default Quotes