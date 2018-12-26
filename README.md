# js-ajaxHelper

Extremely simple component to execute http requests.

To use just include the script on your page:
```
<script src="YOUR_PATH/js.ajax_helper.js"></script>
```

### Basic usage sample

```
// Retrieve a POST client.
var client = _ajaxHelper.post('{your_url}');

// Define the request callback
client.callback(function (error, response) {
    // Always returns an error if it occurs and a response.
    console.log(error ? error : response);
});

// Define the request headers.
client.headers({
    'Content-Type' : 'application/json',
});

// Define the request body.
client.payload({
    param_one: 'A',
    param_two: 2
});

// Send the request
client.send();
```
### Inline usage sample (from a builder)

```
_ajaxHelper.post('https://qapp.policiamilitar.mg.gov.br/oraculo/consultar')

    .callback(function (error, response) {
        console.log(error ? error : response);
    })
    .headers({
        'Content-Type' : 'application/json',
    })
    .payload({
        param_one: 'A',
        param_two: 2
    })
    .send();
```
