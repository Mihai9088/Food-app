import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const stmt = db.prepare(`
      SELECT * FROM meals
   `);
  return stmt.all();
}

export function getMeal(slug) {
  const stmt = db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
  return stmt;
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });

  meal.image = `/images/${fileName}`;

  const stmt = db.prepare(`
      INSERT INTO meals (
         slug,
         title,
         image,
         summary,
         instructions,
         creator,
         creator_email
      ) VALUES (
        @slug,
        @title,
        @image,
        @summary,
        @instructions,
        @creator, 
        @creator_email
      )
   `);

  stmt.run(meal);
}
