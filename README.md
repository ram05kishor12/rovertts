# Rovertts - Text-to-Speech Converter

## Overview

Rovertts is a simple web application that utilizes OpenAI's Text-to-Speech (TTS) model to convert typed text into lifelike spoken audio. This React-based application allows users to select from various voice options provided by the OpenAI API and generate spoken audio from the entered text.

### Features

- Select from six different voices (alloy, echo, fable, nova, onyx, shimmer).
- Convert typed text into spoken audio in real-time.
- Download the generated speech as an MP3 file for future use.

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- React.js

### Installation

1. Clone this repository.

2. Install dependencies using npm:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

   This will run the app in development mode on `http://localhost:3000`.

### Usage

1. Upon launching the app, it will prompt you to enter your OpenAI API key. This key is necessary to access the TTS functionality.

2. Select a voice from the dropdown menu.

3. Enter the text you want to convert into speech in the text area.

4. Click the "Get" button to generate the spoken audio.

5. Once generated, use the "Download" button to save the speech as an MP3 file.

## Dependencies

- React
- OpenAI JavaScript API

## Contributions

Contributions are welcome! If you encounter any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
