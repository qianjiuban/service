/**
 * 序列化+编码
 * @param {*}
 */
 export function enCode (item) {
     return encodeURIComponent(JSON.stringify(item));
  }
/**
 * 解码+实例化
 * @param {*}
 */
  export function deCode (item) {
    return JSON.parse(decodeURIComponent(item));
 }

 
