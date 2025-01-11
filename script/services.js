// Function to populate the available services dropdown
function populateServiceDropdown() {
    let services = JSON.parse(localStorage.getItem("services")) || [];
    $("#petService").empty();  // Clear existing options

    if (services.length === 0) {
        $("#petService").append(`<option>No services available. Please add services first.</option>`);
    } else {
        $("#petService").append(`<option value="">Select a Service</option>`);  
        services.forEach(service => {
            $("#petService").append(`<option value="${service.description}">${service.description}</option>`);
        });
        console.log("Dropdown updated with services:", services);
    }
}

$(document).ready(function () {
    populateServiceDropdown();
});
