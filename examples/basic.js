/*
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


/**
 * Example of use from a client.
 */

/*
 * Retrieve a POST client.
 */
var client = _ajaxHelper.post('https://qapp.policiamilitar.mg.gov.br/oraculo/consultar');

/*
 * Define the request callback
 */
client.callback(function (error, response) {
    // Always returns an error if it occurs and a response.
    console.log(error ? error : response);
});

/*
 * Define the request headers.
 */
client.headers({
    'Content-Type' : 'application/json',
});

/*
 * Define the request body.
 */
client.payload({
    param_one: 'A',
    param_two: 2
});

// Send the request
client.send();


/**
 * Example of online use (from a builder)
 */

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