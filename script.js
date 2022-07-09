let total=0;

function buyTicket(btnElement)
{
    let mainElement=btnElement.closest('.description');

    let price=mainElement.querySelector('.price').innerText;
    let dollarIndex=price.indexOf('$');

    price=parseInt(price.substring(dollarIndex+1));

    total+=price;

    let span=document.getElementById('cost');
    span.innerText=`$${total}`;

    btnElement.setAttribute('onclick','removeTicket(this)');
    btnElement.innerText='Remove From Watch List';
}

function removeTicket(btnElement)
{
    if(confirm('Do you wish to remove this movie ticket?'))
    {
        let mainElement=btnElement.closest('.description');

        let price=mainElement.querySelector('.price').innerText;
        let dollarIndex=price.indexOf('$');
    
        price=parseInt(price.substring(dollarIndex+1));
    
        total-=price;
    
        let span=document.getElementById('cost');
        span.innerText=`$${total}`;
    
        btnElement.setAttribute('onclick','buyTicket(this)');
        btnElement.innerText='Add To Watch List';
    }
}