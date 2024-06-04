var abc=9;
console.log(typeof abc);


function ex8() {
    try {
        if ((typeof abc) == "undefined") {
            throw "Exception occured"
        }
    } catch (ex) {
        console.log(ex);
    }
}

ex8();