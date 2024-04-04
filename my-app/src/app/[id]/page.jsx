async function getDetails(id) {
    const res = await  fetch(`https://fakestoreapi.com/products/${id}`)
    return await res.json()
}




export default async  function Page({params}) {
    const data =await getDetails(params.id)
return (
    <>
    <img src={data.image} alt="images" width={300} height={200} className="Details_page" />
    <div className="container">
    <h1 className="title">Title:{data.title} </h1> 
    <p className="price">Price:{data.price}</p>
    <p>{data.description}</p>
    <p className="category"> Category:{data.category}</p>
    </div>
    </>
)
}
