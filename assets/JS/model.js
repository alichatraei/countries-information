let data = {}
// GET DATA WITH AJAX
async function getData() {
    await $.ajax({
        type: "get",
        url: "https://restcountries.eu/rest/v2/all",
        success(response) {
            Object.assign(data, response)
        },
        error(error) {
            return error;
        }
    });
}