import React, { useEffect, useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
const Add = () => {
  const url = "http://localhost:3001";
  const [image,setImage] = useState(null);
  const [data,setData] = useState({
    name :"",
    description : "",
    price : "",
    category : "Salad",

  })
  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData (data=>({...data,[name]:value}))
  }

  const HandleChangeImage = (e)=>{
    const file = e.target.files[0];
    console.log(file);
  }

  const onSubmitHandler = async (event)=>{
      event.preventDefault();
   const formData = new FormData();
  formData.append("name" ,data.name)
  formData.append("description" ,data.description)
  formData.append("category" ,data.category)
  formData.append("price" ,Number(data.price))
  formData.append("image",image)

  }
  useEffect(()=>{
  console.log(data)
  },[data])
  return ( 
 <> 
 <div className="add  ">
  <form className=' flex-column 'onSubmit={onSubmitHandler}>
    <div className="img-upload  flex-column">
      <p>Upload image</p>
      <label htmlFor="image" className='img-icon'>
      {image ? (
                <img 
                  src={URL.createObjectURL(image)} 
                  alt="Preview" 
                  style={{ width: '100px', height: '100px', objectFit: 'cover' }} 
                />
              ) : (
                <IoCloudUploadOutline />
              )}
      </label>
      <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image'hidden required />
    </div>
  
<div className="add-products flex-column">
  <p>Product name</p>
  <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
</div>
<div className="product-description">
 <p>Product Description</p>
 <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='write here' required></textarea>
</div>
<div className="cat-price">
  <div className="add-cetegory flex-column">
    <p>Product Category</p>
    <select onChange={onChangeHandler} value={data.category} name="category" >
      <option value="Salad">Salad</option>
      <option value="Burger">Burger</option>
      <option value="Pizza">Pizza</option>
      <option value="Cake">Cake</option>
      <option value="Biryani">Biryani</option>
      <option value="Chicken&fries">Chicken&fries</option>
      <option value="Ice-cream">Ice cream</option>
      <option value="Pasta">Pasta</option>
      <option value="Dessert">Dessert</option>
      <option value="Drinks">Drinks</option>
    </select>
    
  </div>

<div className="add-price flex-column ">
  <p>Product price</p>
  <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='PKR50' />
</div>
</div>
<button type='submit'className='btn'>Add Here</button>
  </form>
 </div>

 </>
  )
}

export default Add