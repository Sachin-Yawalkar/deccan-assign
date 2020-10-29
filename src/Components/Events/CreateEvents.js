import React from 'react'

export class CreateEvent extends React.Component {
    render(){
        return(
            <div className = "container-fluid">
                <h1>Hello</h1>
                <div className="container">
                    <h1>Hi</h1>
                    <div className="input-field col s12">
                        <select>
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                        </select>
                        <label>Materialize Select</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEvent;