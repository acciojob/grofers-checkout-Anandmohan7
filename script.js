const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Remove any existing total row if already present
  const existingTotalRow = document.getElementById("totalRow");
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  // Get all price elements
  const prices = document.querySelectorAll(".prices");
  let sum = 0;

  prices.forEach(price => {
    sum += parseFloat(price.textContent);
  });

  // Create new row
  const totalRow = document.createElement("tr");
  totalRow.id = "totalRow"; // So we can remove/replace if needed

  const totalCell = document.createElement("td");
  totalCell.setAttribute("colspan", "2");
  totalCell.textContent = `Total Price: ${sum}`;

  totalRow.appendChild(totalCell);

  // Append to table
  const table = document.querySelector("table");
  table.appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);
