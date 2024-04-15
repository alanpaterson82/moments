import { rest } from "msw";

const baseURL = "https://django-rest-ap-9a62d525c1f0.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        "pk": 3,
        "username": "apaterson1982",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 3,
        "profile_image": "https://res.cloudinary.com/dmnol3krk/image/upload/v1/media/images/bumblebee_gckrz3"
            })
        );
      }),
      rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
      }),
    ];