const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    let url;
    let data;
    if (options.method) {
        data = options.data;
        url = options.url;
        xhr.responseType = "json";

        if (options.method === "GET") {
            url = url + "?"
            for (value in options.data) {
                url = url + value + "=" + options.data[value] + "&";
            }
            xhr.open(options.method, url);
            xhr.send();
        } else {
            let formData = new FormData;
            for (value in options.data) {
                formData.append(value, options.data[value]);
            }
            xhr.open(options.method, url);
	        xhr.send(formData);
        }
    }

    xhr.addEventListener("load", () => {
        options.callback(xhr.response.error, xhr.response);
    })
}
