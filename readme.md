# Weather App - MS1 Capstone API Access Project

This project is a simple web application that provides real-time weather information for a specified city using the OpenWeatherMap API.

## Features

- Enter a city name to retrieve the current weather conditions.
- Displays a clear description of the weather conditions.
- Responsive design for small, medium, and large screens.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate into the project directory:

```bash
cd <project-directory>
```

3. Install the required dependencies:

```bash
npm install
```

4. Set up environment variables:

Create a `.env` file and add your OpenWeatherMap API key:

```bash
API_KEY=your_openweathermap_api_key
```

## Usage

1. Start the server by running:

```bash
npm start
```

2. Open your browser and navigate to:

```
http://localhost:3000
```

3. Enter a city name in the input field and submit to get the current weather description.

## Project Structure

```
project/
├── public/
│   └── style.css
├── views
│   └── index.ejs
├── app.js
├── package.json
└── README.md
```

## Dependencies

- Express
- Axios
- EJS
- Body-parser
- Morgan

## Technologies

- HTML
- CSS
- JavaScript (Node.js)

## Author

MarceluS 1lveira

## License

This project is education purposes only.

