// Function to save services in local storage
function save(item) {
    console.log("Saving item:", item);  // Logging the object for debugging
    let val = JSON.stringify(item);      // Converting the object to a JSON string
    localStorage.setItem("services", val);  // Storing the string in local storage
}

// Function to read services from local storage
function read() {
    let data = localStorage.getItem("services");

    if (!data) {
        return [];  // Return an empty array if no data is found
    } else {
        let list = JSON.parse(data);  // Convert the JSON string back to a JavaScript object
        return list;
    }
}


/*cd path/to/your/project
git init
git remote add origin https://github.com/username/fashion-pet-salon.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main*/
