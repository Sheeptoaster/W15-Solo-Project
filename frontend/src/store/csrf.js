import Cookies from 'js-cookie';

export async function csrfFetch (url, options = {}) {
    //Defaults method to GET if none provided
    options.method = options.method || "GET";
    //Defaults headers to Empty Object if none provided
    options.headers = options.headers || {};


    //If Method is not GET -> sets Content-Type to application/json
    //If Method is not GET -> sets XSRF-Token to value of XSRF-TOKEN Cookie value
    if(options.method.toUpperCase() !== "GET") {
        options.headers['Content-Type'] =
            options.headers['Content-Type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
    }

    //Default windows Fethc with url and options provided in params
    const res = await window.fetch(url, options);

    //If res code > 400 Throws error with error.msg = res
    if(res.status >= 400) throw res;

    //If res code < 400 returns res
    return res;
}


export function restoreCSRF() {
    return csrfFetch('/api/csrf/restore');
}
