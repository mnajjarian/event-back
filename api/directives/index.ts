import { SchemaDirectiveVisitor } from "apollo-server-express";
import axios from "axios";

const baseUrl = "http://open-api.myhelsinki.fi";

export class RestDirective extends SchemaDirectiveVisitor {
  public visitFieldDefinition(field) {
    const { url } = this.args;
    field.resolve = () => axios.get(baseUrl + url).then((res) => res.data.data);
  }
}
