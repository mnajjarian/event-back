import axios from "axios";

const baseUrl = "http://open-api.myhelsinki.fi/v1";

export const resolvers = {
  getEvents: () => axios.get(`${baseUrl}/events/`).then((res) => res.data.data),
  getEventById: (_: undefined, { id }: { id: String }) =>
    axios.get(`${baseUrl}/event/${id}`).then((res) => res.data),
  getActivities: () =>
    axios.get(`${baseUrl}/activities/`).then((res) => res.data.data),
  getActivityById: (_: undefined, { id }: { id: String }) =>
    axios.get(`${baseUrl}/activity/${id}`).then((res) => res.data),
  getPlaces: () => axios.get(`${baseUrl}/places/`).then((res) => res.data.data),
  getPlaceById: (_: undefined, { id }: { id: String }) =>
    axios.get(`${baseUrl}/place/${id}`).then((res) => res.data),
};

export default { Query: resolvers };
