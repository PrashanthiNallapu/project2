document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("trainForm");
  const trainNameInput = document.getElementById("trainName");
  const trainInfoDiv = document.getElementById("trainInfo");
  const errorDiv = document.getElementById("error");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const trainName = trainNameInput.value.trim();
    if (!trainName) {
      errorDiv.textContent = "Please enter a train name.";
      return;
    }

    const url = "https://trains.p.rapidapi.com/";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "a73a0e366fmsh1f8dd8ce0d2becap14dcbcjsn11699d1d3a41",
        "X-RapidAPI-Host": "trains.p.rapidapi.com",
      },
      body: JSON.stringify({ search: trainName }),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (data.length > 0) {
        trainInfoDiv.textContent = "";
        data.forEach((train) => {
          const trainInfo = `Train Number: ${train.train_num}\nName: ${train.name}\nFrom: ${train.train_from}\nTo: ${train.train_to}\nDeparture Time: ${train.data.departTime}\nArrival Time: ${train.data.arriveTime}\n\n`;
          trainInfoDiv.textContent += trainInfo;
        });
      } else {
        trainInfoDiv.textContent = "Train not found.";
      }
      errorDiv.textContent = "";
    } catch (error) {
      errorDiv.textContent = "Error fetching train information.";
      console.error(error);
    }
  });
});


// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("trainForm");
//   const trainNameInput = document.getElementById("trainName");
//   const errorDiv = document.getElementById("error");

//   form.addEventListener("submit", async (event) => {
//     event.preventDefault();

//     const trainName = trainNameInput.value.trim();
//     if (!trainName) {
//       errorDiv.textContent = "Please enter a train name.";
//       return;
//     }

//     const url = "https://trains.p.rapidapi.com/";
//     const options = {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         "X-RapidAPI-Key": "a73a0e366fmsh1f8dd8ce0d2becap14dcbcjsn11699d1d3a41",
//         "X-RapidAPI-Host": "trains.p.rapidapi.com",
//       },
//       body: JSON.stringify({ search: trainName }),
//     };

//     try {
//       const response = await fetch(url, options);
//       const data = await response.json();

//       if (data.length > 0) {
      
//         const newTab = window.open("", "_blank");

      
//         let htmlContent = `<div style="padding: 10px; color: #333;">`;

//         data.forEach((train) => {
//           htmlContent += `<div style="background-color: #fff; padding: 10px; margin-bottom: 20px;">
//             <p style="color: blue;">Train Number: ${train.train_num}</p>
//             <p style="color: blue;">Name: ${train.name}</p>
//             <p style="color: blue;">From: ${train.train_from}</p>
//             <p style="color: blue;">To: ${train.train_to}</p>
//             <p style="color: blue;">Departure Time: ${train.data.departTime}</p>
//             <p style="color: blue;">Arrival Time: ${train.data.arriveTime}</p>
//           </div>`;
//         });

//         htmlContent += "</div>";

      
//         newTab.document.body.innerHTML = htmlContent;
//       } else {
//         errorDiv.textContent = "Train not found.";
//       }
//       errorDiv.textContent = "";
//     } catch (error) {
//       errorDiv.textContent = "Error fetching train information.";
//       console.error(error);
//     }
//   });
// });




     





