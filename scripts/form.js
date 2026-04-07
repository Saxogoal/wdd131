//Product Name
const products = [
    { name: "Product A", price: 10.99 },
    { name: "Product B", price: 24.99 },
    { name: "Product C", price: 5.99 }
];

const select = document.querySelector("#productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
});

// Footer
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;