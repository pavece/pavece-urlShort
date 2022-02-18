<div style="text-align: center;">

![logo](https://res.cloudinary.com/dnh0go0q2/image/upload/v1645224509/urlShortLogo_uj0ghg.svg)

</div>

---

<p>
This is a simple URL shortener that saves the URLs in the user's browser. It simply consists in a backend service that handles the creation which also gets some data from the page, handles the database storage (mongo db). And handles the redirection. 
</p>

<p>
It also has a frontend part mad with react which consists of a simple landing page and a user panel.
</p>

---

## Make it work

1º Create a .env file in the backend folder and add the following values.

```
DATABASE_PASSWORD= MONGO DB PASSWORD
DATABASE_USERNAME= MONGO DB USERNAME
DATABASE_NAME= MONGO DB DABATABASE NAME

```

**NOTE: The project is prepared for mongo db atlas. If you prefer to use other type of mongo db hosting you will need to change the URL into app.ts**

2º Start the project

```
cd urlShort-backend
npm run dev

```

```
cd urlShort-frontend
npm run dev

```

**NOTE: Both services need to be running at the same time, use two terminals**

3º Navigate to http://localhost:3000 and enjoy

## Some images of the page

![landing page](https://res.cloudinary.com/dnh0go0q2/image/upload/v1645225723/landing-page-preview_wwxxas.png)

</br>

![app page](https://res.cloudinary.com/dnh0go0q2/image/upload/v1645225749/app-page-preview_pnpsvs.png)
