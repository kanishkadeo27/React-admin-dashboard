import { Publish } from '@mui/icons-material'
import './newProduct.css'

const NewProduct = () => {
  return (
    <div className='newProduct'>
      <h1 className="newProductTitle">
        New Product
      </h1>
      <form className="newProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" name="" id="file" />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" placeholder='Apple Airpods' />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder='123' />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newProductBtn">Create</button>
      </form>
    </div>
  )
}

export default NewProduct