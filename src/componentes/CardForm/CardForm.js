import './CardForm.css';

function CardForm(){
    return (
        < div id="main" class="d-flex justify-content-center align-items-center">
            <div class="card" style={{width: '30rem'}}>
                <div class="card-body">
                    {/* <h5 class="card-title">Wellcome</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Your list task</h6> */}
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" 
                        placeholder="Informe uma tarefa" 
                        aria-label="Recipient's username" 
                        aria-describedby="button-addon2" />
                        <button class="btn btn-primary" type="button" id="button-addon2">Add</button>
                    </div> 
                    <div className='row'>
                        <div className='col-md-3'>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Urgente
                            </label>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked /> 
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Normal
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      );
}

export default CardForm;