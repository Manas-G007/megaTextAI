const getSimpleText=async(text)=>{
    const API_LINK="https://api.aiseo.ai/v2/rewrite";
    const API_KEY="Z5VP6AkRitffnmW6Z2xQUT51Q4xdzdYuJrwI7WQQ4mkOKRhTXToDVtxXxwBjjr4k3Do1+BfEbobyo0mDyXEVW9qb84Hapy6dENV112uLTx8="

    const res=await fetch(API_LINK,{
        method:"POST",
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            text: text,
            audience: "general",
            formality: "neutral",
            intent: "inform"
        })
    })

    const data=await res.json();
    console.log(data);
    return data;
}


