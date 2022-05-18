import { serve } from "https://deno.land/std@0.139.0/http/server.ts"

const port = 8080;

async function handler(_r: Request) : Promise<Response>{

    const fact = await fetch("https://uselessfacts.jsph.pl/random.json?language=en" , { headers : {
        accept: "application/json",
        }, 
    });

    const f = await fact.json();
    

    return new Response(f["text"] , {status : fact.status, headers:{"Content-Type" :"text/plain"},});

}

console.log("http://localhost:8080/");
serve(handler , { port : port });
