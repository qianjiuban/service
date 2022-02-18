import md5 from "js-md5";
import { getNowFormatDate } from "@/utils/validate";
// const appId = "wX9CBe999999";

// const appSecret = "1231212XXXXDDDDEEEFx2312121212";

const appId = rayframework.appId;
const appSecret = rayframework.appSecret;

export function rayTimeStampFun() {
  const val = getNowFormatDate(new Date());
  return val;
}

export function raySignatureFun(rayTimeStamp) {
  const val = `${appId + md5(md5(rayTimeStamp) + appSecret)}`;
  return val;
}

export function rayHeadSignatureFun(rayTimeStamp, raySignature) {
  const val = `${md5(raySignature + md5(md5(rayTimeStamp + appSecret) + appId))}`;
  return val;
}
