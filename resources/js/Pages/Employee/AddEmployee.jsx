import React, { useState } from 'react'
const AddProduct = (props) => {
    const [newProduct, setNewProduct] = 
        useState(
            {
                title:"", 
                description: "", 
                price: 0, 
                availability: 0
            }
        );
    
    const handleInput = (key, e) => {
        /*Duplicating and updating the state */
        var newState = Object.assign({}, newProduct); 
        newState[key] = e.target.value;
        setNewProduct(newState);
    };
    const handleSubmit = (e) => {
        //preventDefault prevents page reload 
        e.preventDefault();
        /*A call back to the onAdd props. The current 
*state is passed as a param 
*/
        props.onAdd(newProduct);
    };
    const divStyle = {
        /*Code omitted for brevity */ 
    }            
    return(
        <div> 
            <h2> Add new product </h2> 
            <div style={divStyle}> 
                /*when Submit button is pressed, the control is passed to 
*handleSubmit method 
*/
                <form onSubmit={handleSubmit}>
                    <label> Title: 
                    { /*On every keystroke, the handeInput method is invoked */ }
                        <input type="text" onChange={(e)=>handleInput('title',e)} /> 
                    </label> 
                    
                    <label> Description: 
                        <input type="text" onChange={(e)=>handleInput('description',e)} /> 
                    </label> 
                    
                    { /* Input fields for Price and availability omitted for brevity */}
                    <input type="submit" value="Submit" />
                </form> 
            </div> 
        </div> 
    )
}
export default AddProduct