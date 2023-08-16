/**
 * HttpClient is a custom wrapper around fetch api.
 * Exposes get, post and delete methods for JSON.
 */

interface Get {
    path: string;
    authToken?: string;
}

interface Do {
    method: string;
    path: string;
    body?: string;
    authToken?: string;
}

export class HttpClient {
    /**
     * Performs POST http request with JSON body.
     * @param path
     * @param body serialized JSON
     * @param authToken
     */
    public async post(
        path: string,
        body?: string,
        authToken?: string
    ): Promise<Response> {
        return await this.do({ method: 'POST', path, body, authToken });
    }

    /**
     * Performs PATCH http request with JSON body.
     * @param path
     * @param body serialized JSON
     */
    public async patch(
        path: string,
        body?: string,
    ): Promise<Response> {
        return await this.do({ method: 'PATCH', path, body });
    }

    /**
     * Performs PUT http request with JSON body.
     * @param path
     * @param body serialized JSON
     * @param _auth indicates if authentication is needed
     */
    public async put(
        path: string,
        body?: string,
    ): Promise<Response> {
        return await this.do({ method: 'PUT', path, body });
    }

    /**
     * Performs GET http request.
     * @param path
     */
    public async get({ path }: Get): Promise<Response> {
        return await this.do({ method: 'GET', path });
    }

    /**
     * Performs DELETE http request.
     * @param path
     * @param _auth indicates if authentication is needed
     */
    /**
     * Right now needs body here. */
    public async delete(
        path: string,
        body?: string,
    ): Promise<Response> {
        return await this.do({ method: 'DELETE', path, body });
    }

    /**
     * do sends an HTTP request and returns an HTTP response as configured on the client.
     * @param method holds http method type
     * @param path
     * @param body serialized JSON
     */
    private async do({ method, path, body }: Do): Promise<Response> {
        const request: RequestInit = {
            method: method,
            body: body,
        };
            request.headers = {
                'Content-Type': 'application/json',
            };

        return await fetch(path, request);
    }
}
