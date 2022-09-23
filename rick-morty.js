
const   cards           = document.querySelector('#cards'),
        templateCard    = document.querySelector('#template-card').content,
        fragment        = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        loadingData( true );
        const res   = await fetch('https://rickandmortyapi.com/api/character')
        const data  = await res.json()
        // console.log(data);
        showData(data);

    } catch (error) {
        console.log(error);

    } finally {
        loadingData( false );
    }
}

const showData = ( data ) => {
    data.results.forEach( item => {
        // console.log(item);
        const clone = templateCard.cloneNode(true)
        clone.querySelector('img').setAttribute('src', item.image)
        clone.querySelector('h5').textContent   = item.name
        clone.querySelector('p').textContent    = item.species

        fragment.appendChild(clone)
    });

    cards.appendChild(fragment)
}

const loadingData = ( status ) => {
    const loading = document.querySelector('#loading');
    ( status ) ? loading.classList.remove('d-none') : loading.classList.add('d-none')
    
}