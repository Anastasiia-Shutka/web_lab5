const inputName = document.getElementById('input-name');
const inputDuration = document.getElementById('input-duration');
const inputReviews = document.getElementById('input-reviews');
const itemsContainer = document.getElementById('items-container');

const itemTemplate = ({ id, name, duration, reviews }) => `
<li id="${id}" class="card mb-3 item-card">
    <img
    src="movie_icon.png"
    class="item-container__image card-img-top" alt="card">
    <div class="card-body">
        <p class="card-title">Title: ${name}</p>
        <p class="card-text-duration">Duration: ${duration} min</p>
        <p class="card-text-reviews">IMDB Reviews: ${reviews}</p>
        <button id="edit-${id}" type="button" class="btn-info">Edit</button>
        <button id="${id}-delete" type="button" class="btn-delete">Delete</button>
    </div>
</li>`;

export const clearInputs = () => {
    inputName.value = "";
    inputDuration.value = "";
    inputReviews.value = "";
};

export const addItemToPage = ({ id, name, duration, reviews }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, duration, reviews })
    );
};

export const getInputValues = () => {
    const name = inputName.value.trim();
    const duration = inputDuration.value.trim();
    const reviews = inputReviews.value.trim();

    if (!name || !duration || !reviews) {
        return null;
    }

    return {
        name,
        duration: Number(duration),
        reviews: Number(reviews),
    };
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};
