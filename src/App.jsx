import { useState } from 'react'
import './App.css'

function App() {

  const [defaultProduct] = useState([
  { name: "Shirt", price: 250, category: "Clothing", available: true, Imagepath :"Images/shirt.jpg" },
  { name: "Shoes", price: 5000, category: "Clothing", available: false, Imagepath :"Images/Shoes 2.jpg" },
  { name: "Smartphone", price: 1000, category: "Electronics", available: true, Imagepath :"Images/nothing phone .jpg" },
  { name: "Laptop", price: 15000, category: "Electronics", available: true, Imagepath :"Images/dellg155515featured.jpg" },
  { name: "Fridge", price: 50000, category: "Home Appliances", available: false, Imagepath :"Images/lginstaviewproductphotos-8.jpg" },
  { name: "Washing Machine", price: 35000, category: "Home Appliances", available: true , Imagepath :"Images/AdobeStock_613132570-scaled.jpeg" },
  { name: "Shirt", price: 25, category: "Clothing", available: true, Imagepath :"Images/6c666bda-3b10-4448-bccf-c218879742911718016802144-Allen-Solly-Men-Shirts-6571718016801622-1.jpg"  },
  { name: "Shoes", price: 50, category: "Clothing", available: false, Imagepath :"Images/Shoes.jpg" },
  { name: "Smartphone", price: 700, category: "Electronics", available: true, Imagepath :"Images/google-pixel-9-pro-66d5e04002b15.jpg" },
  { name: "Laptop", price: 1000, category: "Electronics", available: true, Imagepath :"Images/laptop.jpg" },
  { name: "Fridge", price: 500, category: "Home Appliances", available: false, Imagepath :"Images/Fridge.jpg" },
  { name: "Washing Machine", price: 300, category: "Home Appliances", available: true , Imagepath :"Images/Washing Machine.jpeg" }
]);

  const [products, setProducts] = useState(defaultProduct);
const [minPrice, setMinPrice] = useState('');
const [maxPrice, setMaxPrice] = useState('');
const [category, setCategory] = useState('');
const [available, setAvailable] = useState('');
const [serch, setSerch] = useState('')

 const handleFilter = () => {
  setProducts(products.filter(product => {
    const isMinPriceValid = minPrice ? product.price >= Number(minPrice) : true;
    const isMaxPriceValid = maxPrice ? product.price <= Number(maxPrice) : true;
    const isCategoryValid = category ? product.category === category : true;
    const isNameValid = serch ? product.name.toLowerCase().includes(serch.toLowerCase()): true;
    const isAvailableValid = available ? product.available === (available === "true") : true;

    return isMinPriceValid && isMaxPriceValid && isCategoryValid && isAvailableValid && isNameValid;
  }));
};


const hendleCleareFilter = ()=>{
  setAvailable("")
  setCategory("")
  setMaxPrice("")
  setMinPrice("")
  setSerch("")
 setProducts(defaultProduct);
}


  return (
    <>
    <h3 className='heading'>Product Filter App</h3>
     <div className='main'>

       <div className='filter-bar'>
        <div className='inginut-tab'>
           <label>Product Name</label>
          <input type="search"  value={serch} onChange={(e)=> setSerch(e.target.value)} placeholder='Search By Name'/>
              <label>Min Price</label>
       <input type="number"  placeholder='Min-Price' value={minPrice}
       onChange={(e)=> setMinPrice(e.target.value)}/>
       <label>Max Price</label>
       <input type="number"  placeholder='Max-Price' value={maxPrice} onChange={(e)=> setMaxPrice(e.target.value)}/>

       <select name="category" value={category} onChange={(e)=> setCategory(e.target.value)}>
        <option value="">Select Category</option>
          <option value="Home Appliances">Home Appliances</option>
            <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
       </select>
       <select name="available" value={available} onChange={(e)=>setAvailable(e.target.value)}>
        <option value="">Select Availability</option>
          <option value="false">Out Of Stock</option>
            <option value="true">Available</option>
       </select>

       <button onClick={handleFilter}>Filter</button>
       <button onClick={hendleCleareFilter}>Cleare Filter</button>
        </div>
      </div>

      {/* Product List */}
      <div className='product-list'>
        {products.map((product, index) => (
          <div key={index} className="product">
            <img src={product.Imagepath} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Availability: {product.available ? "In Stock" : "Out of Stock"}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
export default App
