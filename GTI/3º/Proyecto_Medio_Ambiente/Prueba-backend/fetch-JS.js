


    const options = {
        method: 'GET',
        headers: {
            user:"pablo"
        }
    };

    fetch("http://localhost:3000/measures", options)

        then(response => response.json())
//.then(response => console.log(response))
// .catch(err => console.error(err))


