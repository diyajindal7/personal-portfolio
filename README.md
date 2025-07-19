# Personal Portfolio Website

A modern, responsive single-page portfolio website built with React. This project showcases your skills, projects, and professional information in a clean and elegant design.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Single Page Application**: Smooth scrolling navigation between sections
- **Interactive Elements**: Hover effects and smooth transitions
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action
2. **About**: Personal information and background
3. **Skills**: Technical skills organized by category
4. **Projects**: Showcase of your best work
5. **Contact**: Professional contact information and links

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

## Customization

### Personal Information

Update the following in `src/App.js`:

1. **Name**: Replace `[Your Name]` with your actual name
2. **Title**: Update the job title in the hero section
3. **About**: Modify the about section text to reflect your background
4. **Skills**: Update the skills lists with your actual technical skills
5. **Projects**: Replace the placeholder projects with your real projects
6. **Contact**: Update email, LinkedIn, and GitHub links

### Styling

The main styles are in `src/App.css`. You can customize:

- Colors: Update the CSS variables and color values
- Typography: Modify font sizes and weights
- Layout: Adjust spacing and grid layouts
- Animations: Customize transition effects

### Adding New Sections

To add new sections:

1. Add the section JSX in `src/App.js`
2. Add corresponding CSS styles in `src/App.css`
3. Update the navigation menu if needed

## Project Structure

```
src/
├── App.js          # Main component with all sections
├── App.css         # Styles for the portfolio
├── index.js        # React entry point
└── index.css       # Global styles and font imports

public/
├── index.html      # HTML template
└── manifest.json   # PWA manifest
```

## Technologies Used

- **React**: Frontend framework
- **CSS3**: Styling with modern features like Grid and Flexbox
- **JavaScript ES6+**: Modern JavaScript features
- **Google Fonts**: Inter font family for typography

## Deployment

This project can be deployed to various platforms:

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements that could benefit others, consider submitting a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

---

**Happy coding! 🚀**
