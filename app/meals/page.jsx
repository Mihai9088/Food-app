import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "NextLevel Food | Meals",
  description: "Delicious meals, shared by a food-loving community.",
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Meals created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose from a wide range of delicious meals</p>

        <p className={classes.cta}>
          <Link href="/meals/share">Share a Meal</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={  <p className={classes.loading}>Fetching meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
