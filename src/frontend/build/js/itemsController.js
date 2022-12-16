export class Bike {
    constructor(currentId = 0) {
        this.newBikes = [];
        this.currentId = currentId;
    }

    addBike (name, description, image_url, price){
        const item = {
        name: name,
        description: description,
        price: price,
        image_url: image_url,
        newId: this.currentId++,
     };
    this.newBikes.push(item);
    }   
}



 export function save(name, description, image_url,price){

            const data = { name,  description, image_url, price};

            fetch('http://localhost:8080/item/add', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {
            console.error('Error:', error);
            });
        }