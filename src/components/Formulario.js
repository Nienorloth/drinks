import React from 'react';

const Formulario = () => {
    return ( 
        <form
            className="col-md-12"
        >
            <fieldset className="text-center">
                <legend>Look for drinks by category or by ingredient</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Search by ingredient"
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">--Select category --</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;