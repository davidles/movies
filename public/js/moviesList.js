window.onload = function () {
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    // let modo = confirm('Desea modo oscuro');
    // if(modo){
    //     body.style.backgroundColor = '#7f7f7f'
    //     body.classList.add('fondoMoviesList');
    // }

    body.style.backgroundColor = 'black'
    // body.classList.add('fondoMoviesList');

    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color = 'white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';




}


/*** Carrito  de  compras */

const btnAdd = document.querySelector('button');
const tbody = document.querySelector('tbody');
const msg = document.querySelector('h4');

const cart = [];


const addToCart = (title, id) => {
    msg.style.display = 'none';
    const exist = cart.some((obj) => obj.id === id);

    if(!exist){
        cart.push({
            id,
            title,
            quantity: 1
        });

    }else{
        const obj = cart.find((elem) => elem.id === id);
        obj.quantity++
    }

    
    return addToTable(cart)
}


const addToTable = (arr) =>{
    tbody.innerHTML = ''
    arr.forEach((element, i) => {
        const row = document.createElement('tr');
        const number = document.createElement('td');
        const title = document.createElement('td');
        const quantity = document.createElement('td');
        const deleteItem = document.createElement('td');

        deleteItem.innerHTML = '<button class="btn btn-sm btn-danger" > Delete </button>';

        deleteItem.addEventListener('click', () =>{
            deleteOfCart(i)
        })


        number.innerHTML = `<th scope="row">${i + 1} </th>`;
        title.innerHTML = element.title;
        quantity.innerHTML = element.quantity;

        // row.appendChild(number);
        // row.appendChild(title);
        // row.appendChild(quantity);
        // row.appendChild(deleteItem);

        row.append(number,title,quantity,deleteItem);

        tbody.appendChild(row)

    });
}

const deleteOfCart = (i) =>{
    cart.splice(i, 1);
    addToTable(cart)

    if(cart.length == 0){
        msg.style.display = 'block'
    }
}




