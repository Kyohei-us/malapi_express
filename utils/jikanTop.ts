import { jikanTop } from "../common/types";

export function jikanTopToParams(jikanTop: jikanTop) {
    const ret = jikanTop.type + '/' + jikanTop.page + '/' + jikanTop.subtype
    return ret;
}