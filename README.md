# Builder - Build Together. Build Better.

A community-driven platform for makers, founders, and creatives to showcase what they're building, exchange advice, and find collaborators — locally or globally.

## 🚀 Overview

Builder is designed to foster a vibrant community where feedback, advice, and appreciation flow naturally. Whether you're coding an app, crafting furniture, designing a brand, or inventing hardware, Builder gives you a space to share progress, connect with like-minded builders, and bring ideas to life together.

## ✨ Key Features

### 1. Project Showcases
- Post builds (idea, in-progress, or completed)
- Include images, descriptions, skills used, and categories
- **Threaded Project Updates**: Add progress logs directly to your original post so followers can see the full journey in one place — from first sketch to final product

### 2. Looking For Board (Collaboration Marketplace)
- Post Project Briefs including what you're building
- Specify skills or roles needed
- Set location preferences (local/remote/hybrid)
- Browse opportunities and apply to join

### 3. Local Builder Finder
- Search/filter by location and skills
- Map view showing nearby builders and their current projects
- "Open to Meetups" badge for in-person collaboration

### 4. Community Engagement Tools
- Weekly build prompts ("Show your progress this week")
- Featured projects (local and global)
- Skill endorsements from peers

### 5. Achievements & Badges
- Earn recognition for skills used and projects completed
- Badges for collaborative contributions and community engagement

## 🎯 Target Audience

- Makers and tinkerers
- Indie hackers and startup founders
- Designers, developers, and engineers
- Artists and creators who want feedback or collaborators

## 🛠️ Technology Stack

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Ready for Vercel/Netlify

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd builder
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
builder/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Features.tsx       # Features overview
│   ├── ProjectShowcase.tsx # Project showcase section
│   ├── LookingForBoard.tsx # Collaboration marketplace
│   ├── LocalBuilderFinder.tsx # Local builder discovery
│   ├── CommunityTools.tsx # Community engagement tools
│   ├── Achievements.tsx   # Badges and recognition
│   └── Footer.tsx         # Footer with links
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9) - Main brand color
- **Secondary**: Gray (#64748b) - Text and borders
- **Accent**: Yellow (#eab308) - Highlights and CTAs

### Components
- **Buttons**: Primary, secondary, and accent variants
- **Cards**: Consistent card design with hover effects
- **Badges**: Skill tags and status indicators
- **Inputs**: Form fields with focus states

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large text for hierarchy
- **Body**: Readable text with proper line height

## 🔧 Customization

### Adding New Components
1. Create a new component in the `components/` directory
2. Import and use it in the appropriate page or component
3. Follow the existing design patterns and Tailwind classes

### Modifying Styles
- Update `tailwind.config.js` for theme changes
- Modify `app/globals.css` for custom CSS
- Use Tailwind utility classes for component-specific styling

### Adding New Features
- Follow the component structure established in the project
- Use TypeScript interfaces for data structures
- Maintain consistent naming conventions

## 📱 Responsive Design

The app is fully responsive and works on:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` directory
3. Configure build settings in Netlify

### Other Platforms
The app can be deployed to any platform that supports Next.js static exports.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with Next.js and Tailwind CSS
- Icons from Lucide React
- Fonts from Google Fonts
- Design inspiration from modern community platforms

---

**Builder** - Where great ideas become great projects, together.
