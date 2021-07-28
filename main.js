function valueChanged() {
    // if auto refresh enabled regenerate maze
    if (document.getElementById("autorefresh").checked == true) generate();
  }
  
  function generate() {
    var size = parseInt(document.getElementById("slider").value); // initialize slider
    size = size % 2 == 0 ? size + 1 : size; // maze size has to be odd
    const array = Array.from(Array(size), () => new Array(size)); // create array
  
    // generate walls and bases
    for (let x = 0; x < size; x++)
      for (let y = 0; y < size; y++) {
        if (x == 0 || x == size - 1 || y == 0 || y == size - 1) array[x][y] = 1;
        else if (x % 2 == 0 && y % 2 == 0) array[x][y] = 2;
        else array[x][y] = 0;
      }
  
    while (true) {
      var numberOfBases = 0;
  
      // get number of bases left
      for (let x = 0; x < size; x++)
        for (let y = 0; y < size; y++) if (array[x][y] == 2) numberOfBases++;
      if (numberOfBases == 0) break; // exit when there are no bases left
  
      const randomBase = Math.floor(Math.random() * numberOfBases); // get random base
  
      var currentBase = 0;
      for (let x = 2; x < size; x += 2)
        for (let y = 2; y < size; y += 2) {
          if (currentBase == randomBase) {
            let direction = Math.floor(Math.random() * 4); // get random direction
            let i = 0;
            while (true) {
              // direction
              let tmpX = direction < 2 ? x : x + i;
              let tmpY = direction > 1 ? y : y + i;
  
              if (array[tmpX][tmpY] == 1) break;
              else array[tmpX][tmpY] = 1;
  
              i += direction % 2 == 0 ? -1 : 1;
            }
          }
          if (array[x][y] == 2) currentBase++; // calculate current base
        }
    }
  
    const canvas = document.getElementById("canvas"); // get canvas
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear canvas
    const xSize = canvas.width / size; // calculate one block width
    const ySize = canvas.height / size; // calculate one block height
  
    // print maze
    for (let x = 0; x < size; x++)
      for (let y = 0; y < size; y++) {
        ctx.beginPath();
        if (array[x][y]) ctx.fillRect(x * xSize, y * ySize, xSize, ySize);
      }
  }