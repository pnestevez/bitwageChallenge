# Bitwage challenge

## The app

This is a responsive web application made in React with the Next.js framework. I used Tailwind CSS for styling and Shadcn as a component library, as requested for this challenge. Also, ESLint, to style the code.

The application has three pages: /dashboard, /table and /profile. In all cases, it consumes a Layout component that contains the Navbar, the Footer, and the main section where the content of each view is rendered. I used server-side rendering and stale-while-revalidate (SWR, from Vercel) strategies, in data fetch tasks.

Although the Chart and List components are only used in the Dashboard, they were developed agnosticlly so that they can be reused in other parts of the application if necessary.

## The api

The API has three endpoints: /profile, /stats/overview and /stats/appearances. In all cases, they respond with hardcoded data, which could be replaced with a connection to a database.

## Prerequisites

1- Node

## Setup

1- Clone the repository

    % git clone https://github.com/pnestevez/bitwageChallenge.git

2- Install the dependencies

    % cd bitwageChallenge
    % npm install

3- Start the app

    % npm start

The app runs locally on port 3000 and is deployed on Vercel (https://bitwage-challenge.vercel.app).
