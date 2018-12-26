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
 * Object that defines how the component will behave.
 * @type {{
 *      config: {method: {GET: string, POST: string, PUT: string, DELETE: string}},
 *      get: _ajaxHelper.get,
 *      post: _ajaxHelper.post,
 *      put: _ajaxHelper.put,
 *      delete: _ajaxHelper.delete,
 *      generateClient: _ajaxHelper.generateClient
 * }}
 * @private
 */
var _ajaxHelper = {

    /**
     * Define the configurations of component.
     */
    config: {
        method: {
            GET: 'GET',
            POST: 'POST',
            PUT: 'PUT',
            DELETE: 'DELETE'
        }
    },

    /**
     * Function that returns a client to execute a get.
     * @param _url.
     * @return {*}.
     */
    get: function (_url) {
        return this.generateClient(_url, this.config.method.GET);
    },

    /**
     * Function that returns a client to execute a post.
     * @param _url.
     * @return {*}.
     */
    post: function (_url) {
        return this.generateClient(_url, this.config.method.POST);
    },

    /**
     * Function that returns a client to execute a put.
     * @param _url.
     * @return {*}.
     */
    put: function (_url) {
        return this.generateClient(_url, this.config.method.PUT);
    },

    /**
     * Function that returns a client to execute a delete.
     * @param _url.
     * @return {*}.
     */
    delete: function (_url) {
        return this.generateClient(_url, this.config.method.DELETE);
    },

    /**
     * Function responsible for generating a client.
     * @param _url.
     * @param _method.
     * @return {{
     *      request: XMLHttpRequest,
     *      body: string,
     *      callback: callback,
     *      headers: headers,
     *      payload: payload,
     *      send: send
     * }}
     */
    generateClient: function (_url, _method) {
        var request = new XMLHttpRequest();
        request.open(_method, _url, true);
        /*
         * Object that implements the design pattern builder.
         */
        return {
            request: request,
            body: '',
            /**
             * Sets the request callback.
             * It will return an error and a response.
             * @param _callback.
             * @return {_ajaxHelper}.
             */
            callback : function (_callback) {
                this.request.onreadystatechange = function () {
                    if (request.readyState === 4)
                        request.status === 200
                            ? _callback(null, request.responseText)
                            : _callback(request.responseText, null);

                };
                return this;
            },
            /**
             * Sets the request headers
             * @param _headers.
             * @return {_ajaxHelper}.
             */
            headers: function (_headers) {
                var keys = Object.keys(_headers),
                    length = keys ? keys.length : 0;
                for (var k = 0; k < length; k++) {
                    request.setRequestHeader(keys[k], _headers[keys[k]]);
                }
                return this;
            },
            /**
             * Defines the payload of the request and makes the parser for json if it is an object.
             * @param body.
             * @return {_ajaxHelper}.
             */
            payload: function (body) {
                this.body = typeof body === 'string' ? body : JSON.stringify(body);
                return this;
            },
            /**
             * Function responsible for performing the http request.
             */
            send: function () {
                this.request.send(this.body);
            }
        };
    }

};
