import React from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";

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
        <MealsGrid meals= {[]}/>
      </main>
    </>
  );
};

export default MealsPage;
