// Retrieve the stored result from local storage
const storedResult = localStorage.getItem("userResult");
if (storedResult) {
    const result = JSON.parse(storedResult);
    // Now you can use the 'result' object as needed
    console.log(result);
    // You can also clear the stored result from local storage if needed
    // localStorage.removeItem("userResult");
}
