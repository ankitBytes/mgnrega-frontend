# MGNREGA Analytics Dashboard - Frontend

A modern, accessible, and multilingual React-based dashboard for visualizing MGNREGA (Mahatma Gandhi National Rural Employment Guarantee Act) employment data, project progress, and financial metrics across rural India.

## 🌟 Features

- **Real-time Data Visualization**: Interactive charts and graphs using Chart.js
- **Multilingual Support**: Full support for English and Hindi languages
- **Accessible Design**: WCAG 2.1 AA compliant with screen reader support
- **Responsive Layout**: Mobile-first design that works on all devices
- **RESTful API Integration**: Seamless connection with the backend API
- **Modern UI**: Clean, intuitive interface with MetricCard components
- **Trend Analysis**: Comprehensive employment and project completion trend charts

## 📦 Project Structure

```
mgnrega-frontend/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, and other media
│   ├── components/     # Reusable React components
│   │   └── MetricCard.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   └── Trends.jsx
│   ├── i18n/           # Internationalization files
│   │   ├── en.json     # English translations
│   │   └── hi.json     # Hindi translations
│   ├── App.jsx         # Main application component
│   └── api.js          # API configuration and utilities
├── .env.example        # Environment variable template
├── .prettierrc         # Code formatting configuration
├── Dockerfile          # Docker container configuration
├── package.json        # Project dependencies
└── README.md           # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/ankitBytes/mgnrega-frontend.git
cd mgnrega-frontend
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Configure environment variables**

Copy the `.env.example` file to `.env` and update the values:

```bash
cp .env.example .env
```

Edit `.env` and configure the following variables:

```env
# API Configuration
REACT_APP_API_BASE_URL=http://localhost:5000/api

# Optional: Enable debugging
REACT_APP_DEBUG=false
```

4. **Start the development server**

```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

### Production Build

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

The build files will be generated in the `build/` directory.

## 🐳 Docker Usage

### Building the Docker Image

```bash
docker build -t mgnrega-frontend .
```

### Running the Container

```bash
docker run -p 3000:3000 -e REACT_APP_API_BASE_URL=http://your-backend-api:5000/api mgnrega-frontend
```

### Using Docker Compose

Create a `docker-compose.yml` file:

```yaml
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "3000:3000"
    environment:
      - REACT_APP_API_BASE_URL=http://backend:5000/api
    depends_on:
      - backend
  
  backend:
    image: mgnrega-backend:latest
    ports:
      - "5000:5000"
```

Run with:

```bash
docker-compose up
```

## 🌍 API Configuration

### API Base URL

The application uses the `REACT_APP_API_BASE_URL` environment variable to configure the backend API endpoint. This is set in the `.env` file.

### API Integration (src/api.js)

The `src/api.js` file provides utility functions for making API calls:

```javascript
import { fetchData, postData, handleError } from './api';

// Example: Fetch dashboard metrics
const metrics = await fetchData('/dashboard/metrics');

// Example: Post filter data
const results = await postData('/dashboard/filter', { state: 'UP', year: 2024 });
```

### Available API Endpoints

- `GET /api/dashboard/metrics` - Fetch key metrics
- `GET /api/trends/employment` - Get employment trend data
- `GET /api/trends/completion` - Get project completion data
- `POST /api/dashboard/filter` - Filter data by state, district, year

### Backend Repository

🔗 **Backend API**: [mgnrega-backend](https://github.com/ankitBytes/mgnrega-backend)

Make sure the backend is running before starting the frontend application.

## 🌏 Localization (Internationalization)

### Supported Languages

- **English (en)**: Default language
- **हिंदी (hi)**: Hindi language support

### Translation Files

Translation files are located in `src/i18n/`:

- `en.json` - English translations
- `hi.json` - Hindi translations (हिंदी अनुवाद)

### Using Translations in Components

```javascript
import translations from './i18n/en.json';
// or
import translations from './i18n/hi.json';

// Access translations
const title = translations.app.title;
const welcomeMessage = translations.home.welcome;
```

### Switching Languages

Users can switch between English and Hindi using the language selector in the navigation menu. The selected language preference is saved in localStorage.

### Adding New Translations

1. Open the appropriate translation file (`en.json` or `hi.json`)
2. Add your new key-value pair following the existing structure
3. Use the same key in both files to ensure consistency

Example:

```json
{
  "common": {
    "newButton": "Click Me"  // in en.json
    "newButton": "मुझे क्लिक करें"  // in hi.json
  }
}
```

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance

This application is designed to meet WCAG 2.1 Level AA standards:

- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Color Contrast**: Minimum 4.5:1 contrast ratio for normal text
- **Focus Indicators**: Clear visual focus states for all interactive elements
- **Alternative Text**: All images include descriptive alt text

### Accessibility Features Implemented

1. **Semantic HTML**: Use of proper heading hierarchy (h1, h2, h3)
2. **ARIA Attributes**:
   - `aria-label` for descriptive labels
   - `aria-labelledby` for associating labels with controls
   - `aria-live` for dynamic content announcements
   - `role="img"` for chart components

3. **Skip Links**: "Skip to main content" link for keyboard users
4. **Form Labels**: All form inputs have associated labels
5. **Chart Accessibility**: Charts include text alternatives and data tables

### Screen Reader Testing

Tested with:
- NVDA (Windows)
- JAWS (Windows)
- VoiceOver (macOS/iOS)
- TalkBack (Android)

### Keyboard Shortcuts

- `Tab` / `Shift+Tab` - Navigate between interactive elements
- `Enter` / `Space` - Activate buttons and links
- `Esc` - Close modals and dialogs
- `Arrow Keys` - Navigate within select dropdowns

## 🎨 Design Principles

### Mobile-First Approach

- Responsive design that adapts to all screen sizes
- Touch-friendly interface elements (minimum 44x44px tap targets)
- Optimized for slow network connections

### Visual Design

- **Typography**: Clear, readable fonts with appropriate sizing
- **Color Scheme**: Accessible color palette with high contrast
- **Spacing**: Consistent padding and margins using a spacing scale
- **Components**: Reusable, modular component architecture

### Performance Optimization

- Code splitting for faster initial load
- Lazy loading of images and components
- Optimized bundle size with tree shaking
- Efficient React rendering with memoization

## 📊 Trends Page - Sample Data

The Trends page (`src/pages/Trends.jsx`) includes sample chart data demonstrating:

### Monthly Employment Statistics
Line chart showing worker employment trends across 12 months with sample data ranging from 245K to 401K workers.

### Project Completion Rate
Line chart tracking completion rates from 68% to 88% throughout the year.

### Fund Utilization Trends
Bar chart comparing allocated vs. utilized funds in crores (₹), showing efficient fund management.

### State-wise Comparison
Bar chart displaying active projects across top 10 states (UP, Bihar, MP, WB, Rajasthan, etc.).

### Data Summary Cards
- Total Employment: 3.9M (+12.5% from 2023)
- Average Completion Rate: 78% (+5.2% from 2023)
- Total Fund Utilization: ₹6,156 Cr (+8.3% from 2023)
- Average Wage Days: 54 days (+2.1% from 2023)

## 🛠️ Development

### Code Formatting

This project uses Prettier for code formatting. Configuration is in `.prettierrc`.

Format code:

```bash
npm run format
# or
yarn format
```

### Linting

```bash
npm run lint
# or
yarn lint
```

### Running Tests

```bash
npm test
# or
yarn test
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- **Ankit** - [@ankitBytes](https://github.com/ankitBytes)

## 🚀 Related Projects

- **Backend API**: [mgnrega-backend](https://github.com/ankitBytes/mgnrega-backend)

## 📞 Support

For questions, issues, or suggestions:
- Open an issue on GitHub
- Contact: [GitHub Profile](https://github.com/ankitBytes)

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes.

---

**Note**: This is a demonstration project for MGNREGA data visualization. For production use, ensure proper security measures, data validation, and compliance with government data policies.

🇮🇳 Made with ❤️ for rural India
