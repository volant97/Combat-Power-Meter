import { APP_VERSION } from "@/constants/version";

export default function Version() {
  return <div className="absolute left-8">{APP_VERSION}</div>;
}
