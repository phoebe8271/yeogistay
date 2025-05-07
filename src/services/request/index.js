import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config"

// 요청 클래스 래핑
class HYRequest {
    constructor(baseURL, timeout) {
        this.instance = axios.create({
            baseURL,
            timeout
        });

        // 인터셉터, data 부분만 반환
        this.instance.interceptors.response.use(
            (res) => res.data,
            (err) => Promise.reject(err.response || err)
        );
    }

    request(config) {
        return this.instance.request(config)
    }

    get({ url, params, headers }) {
        return this.request({ url, method: 'get', params, headers });
    }

    post({ url, data, headers }) {
        return this.request({ url, method: 'post', data, headers });
    }
}

export default new HYRequest(BASE_URL, TIMEOUT)