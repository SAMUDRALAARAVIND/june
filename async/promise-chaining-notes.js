/*
    *****

    1. then method returns a promise that will indicate the execution or non execution of the callback passed to then method 

       let x = prom.then(cb);

        if `cb` is executed 
            case i: without any error inside `cb`
                => x state will change fullfilled with the data of x being the value returned by `cb`
            case ii: error inside `cb`
                => x state will change to rejected with the data of x being the Error object which occured inside `cb`.

        if `cb` is not executed => x state will change to rejected with the data of x being the value with which `prom` is rejected.


    2. catch method will also returns a promise that will be fullfilled always but will be rejected when there's an error encountered inside the catch.
        let x = prom.catch(cb);

        if `cb` is called
            case i: no error occured inside the `cb` => x (fullfilled) with data returned by the `cb`
            
            case ii: error occured inside the `cb` => 
                x => {rejected, Error}
        if `cb` is not called:
            x will be fullfilled with the data with which the prom is fullfilled
*/