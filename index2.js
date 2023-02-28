myFunction = () => {
  let input = document.getElementById("input").value;

  podzielone = input.match(/.[\s\S]{1,1999}/g);

  const n = podzielone.length;

  for (let i = 0; i < n; i++) {
    console.log(podzielone[i]);
  }
};
