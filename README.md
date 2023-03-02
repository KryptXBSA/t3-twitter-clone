This is an open source Twitter clone, Built with T3 Stack + NextAuth + Postgres(Supabase) + Prisma, It's a simple clone and may not be secure, So it's not recommended for production use.

**Requirements**

* Postgres Database: I recommend Supabase, Register a supabase account > Create a new project > Create a new database.

* Supabase Storage: Your project > Create a new Bucket > Add this policy to be able upload images via our backend:  
`CREATE POLICY "<policy name>" ON storage.objects FOR INSERT TO public WITH CHECK (bucket_id = '<bucket-name>');`


**How to Run Locally**

To run the project locally, follow these steps:

* Clone the project `git clone https://github.com/AlandSleman/t3-twitter-clone`
* Copy the contents of the .env.example file into a new file named .env, then replace the values with your own.
* Install the project dependencies by running `npm install`
* Push the Prisma schema to the database `npx prisma db push`
* Build the project `npm run build`
* Start the project `npm start`

If you want to use Express.js for the backend instead of Next.js, Check the other branch `with-express`


