import React from "react"

const PizzaForm = (props) => {
  return(

      <div className="form-row" >
        <div className="col-5">
            <input type="text" id= "topping" className="form-control" placeholder="Pizza Topping" name= "topping"
              value={props.editPizza.topping} onChange={props.handleChange}/>
        </div>

        <div className="col" onChange={props.handleChange}>
          <select value={props.editPizza.size} name= "size" id= "size" className="form-control" onChange={props.handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

      {
        <div className="col" onChange={props.handleChange}>
          <div className="form-check">
            <input className="form-check-input" type="radio" name= "vegetarian" id="vegetarian" value={true} checked={props.editPizza.vegetarian === true || props.editPizza.vegetarian === "true" } onChange={props.handleChange}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check" onChange={props.handleChange}>
            <input className="form-check-input" type="radio" id= "Not-vegetarian" name= "vegetarian" value={false} checked={props.editPizza.vegetarian === false || props.editPizza.vegetarian === "false"} onChange={props.handleChange}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>

    }
        <div className="col" >
          <button type="submit"  className="btn btn-success" onClick={(e)=> props.handleSubmit(e, props.editPizza)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
