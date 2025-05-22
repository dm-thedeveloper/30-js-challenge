let promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    let success = true; // Example condition
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed.");
    }
  });

  console.log(promise);
