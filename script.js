(function(){
    // Define global varibales to pick various elements in the page
    
    const detailsForm = document.querySelector('#destination_details_form');



    detailsForm.addEventListener('submit', handelFormSubmit);

    function handelFormSubmit(event){
        event.preventDefault();

        // 1. Extract the value from each form field
        const destName = event.target.elements["name"].value;
        const destLocation = event.target.elements["location"].value;
        const destPhoto = event.target.elements["photo"].value;
        const destDesc = event.target.elements["description"].value;
        // 2. clear out the form fields

        for (let i=0; i < detailsForm.length; ++i){
            detailsForm.elements[i].value = "";
        }
        // 3. Run a function that creates the new card

        // create card here..
        let destCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);
        
        // 4. If needed, change the header at the top of the destination list
        let wishListContainer = document.getElementById('destination_container');
        
        if(wishListContainer.children.length === 0){
            document.getElementById('title').innerHTML = "My Wish List";
        }
        // 5. add the card

        wishListContainer.appendChild(destCard);
    }

    function createDestinationCard(name, location, photoURL, description){
        let card = document.createElement("div");
        card.className = 'card';
        
        let img = document.createElement('img');
        img.setAttribute('alt', name);

        let constantPhotourl = 'images/signpost.jpg'

        if(photoURL.length === 0){
            img.src = constantPhotourl;
            img.setAttribute('src', constantPhotourl);
        } else {
            img.setAttribute('src', photoURL);
        }

        card.appendChild(img); //append the image element to the card div


        var cardBody = document.createElement("div");
        cardBody.className ='card_body';

        var cardTitle = document.createElement("h3");
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        var cardSubtitle = document.createElement("h4");
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);

        if(description.length !== 0){
            var cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.innerText = description;
            cardBody.appendChild(cardText);
        }

        var cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerText = "Remove";

        cardDeleteBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);

        return card;

    }

    function removeDestination(event){
        let card = event.target.parentElement.parentElement;
        card.remove();
    }


})();