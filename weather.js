AOS.init();
let placelatlon = {
	biliran: { lat: 11.4675, lon: 124.471 },
	easternSamar: { lat: 11.4951, lon: 125.5361 },
	leyte: { lat: 10.884, lon: 124.8301 },
	northernSamar: { lat: 12.4022, lon: 124.6477 },
	samar: { lat: 11.7787, lon: 124.884 }, // Samar
	southernLeyte: { lat: 10.2769, lon: 125.048 },
	ormoc: { lat: 11.0044, lon: 124.6075 },
	tacloban: { lat: 11.241, lon: 125.0036 },
};

// himog key api
let pass = "";

let show = document.getElementById("show");
let displayplace = document.getElementById("displayplace");
// let = currentw = document.getElementById("currentweather");

async function weather(place) {
	let url = `https://api.openweathermap.org/data/2.5/weather?lat=${place.lat}&lon=${place.lon}&appid=${pass}`;

	let response = await fetch(url);
	let data = await response.json();
	console.log(data.name, data.weather[0].description, data.main.temp);
	// show.innerHTML = data.name, data.weather, data.main.temp;
	displayplace.innerHTML = data.name;
	// secnameplace.innerHTML = data.name + data.weather[0].description;
	// currentweather.innerHTML = data.weather[0].description;
	document.querySelector("#currentweather").innerHTML =
		data.weather[0].description;
	document.querySelector("#shownameplacesec").innerHTML = data.name;
	console.log(data.weather.icon);
	document.querySelector("#showsecwind").innerHTML =
		data.wind.speed + "wind speed";
	document.querySelector("#showsecsea").innerHTML =
		data.main.sea_level + " sea level";

	if ((data.weather[0].main = "clear")) {
		document.querySelector(".wicon").src = "5.png";
	}
	//
	else if ((data.weather[0].main = "Clouds")) {
		document.querySelector(".wicon").src = "02d@2x.png";
	}
	//
	else if ((data.weather[0].main = "rain")) {
		document.querySelector(".wicon").src = "9.png";
	}
	//
	else if ((data.weather[0].main = "Drizzle")) {
		document.querySelector(".wicon").src = "4.png";
	}
	//
	else if ((data.weather[0].main = "Mist")) {
		document.querySelector(".wicon").src = "50d@2x.png";
	}
	//
	else if ((data.weather[0].main = "thunderstorm")) {
		document.querySelector(".wicon").src = "11.png";
	}
}

document.getElementById("biliran").addEventListener("click", function () {
	weather(placelatlon.biliran);
});

document.getElementById("easternSamar").addEventListener("click", function () {
	weather(placelatlon.easternSamar);
});

document.getElementById("leyte").addEventListener("click", function () {
	weather(placelatlon.leyte);
});

document.getElementById("northernSamar").addEventListener("click", function () {
	weather(placelatlon.northernSamar);
});

document.getElementById("samar").addEventListener("click", function () {
	weather(placelatlon.samar);
});

document.getElementById("southernLeyte").addEventListener("click", function () {
	weather(placelatlon.southernLeyte);
});

document.getElementById("ormoc").addEventListener("click", function () {
	weather(placelatlon.ormoc);
});

document.getElementById("tacloban").addEventListener("click", function () {
	weather(placelatlon.tacloban);
});
