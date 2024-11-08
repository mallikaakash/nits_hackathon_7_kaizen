This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Kaizen

Kaizen is a web application designed to help children improve their social skills and reduce their screen time. Built using Next.js and Supabase, this app provides a comprehensive, interactive platform that engages both children and their parents in a collaborative effort to foster better habits and personal development.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **User Registration and Initial Interaction:** Parents and children sign up and create profiles. Initial interaction involves a diagnostic session, either via a chatbot or a face-to-face camera-based computer vision analysis, to assess the child's current state and social skills.
- **Personalized Daily Plans:** Based on the initial assessment, the app generates a personalized, day-wise improvement plan for the child, following the Kaizen philosophy of continuous improvement.
- **Parental Involvement and Rewards:** Parents can set up motivational rewards, such as monetary incentives or other perks, to encourage their child's participation and completion of daily or weekly tasks.
- **Content Recommendations:** A dedicated section for daily book reading and podcast recommendations, tailored to the child's interests and developmental needs.
- **Interactive and Adaptive Learning:** The app adapts to the child's progress and provides ongoing adjustments to the plan, ensuring continuous engagement and development.

## Technologies Used

- **Frontend:** Next.js for a dynamic and responsive user interface.
- **Backend:** Supabase for real-time database management and authentication.
- **AI/ML:** Chatbot for initial assessments and interaction.
- **Gamification:** Reward system and progress tracking to motivate children.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/kaizen-kid.git
    cd kaizen-kid
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env.local` file in the root directory and add your Supabase project URL and API key:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

## Usage

1. Run the development server:
    ```bash
    npm run dev
    ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

3. To build the project for production:
    ```bash
    npm run build
    ```

4. To start the production server:
    ```bash
    npm start
    ```

## Contributing

We welcome contributions to Kaizen Kid! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or feedback, please reach out to us at [your-email@example.com](mailto:your-email@example.com).


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
