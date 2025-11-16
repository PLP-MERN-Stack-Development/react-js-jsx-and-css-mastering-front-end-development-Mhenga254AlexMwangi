import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';
import Card, { CardBody } from '../components/Card/Card';

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, complete, and organize your tasks with our intuitive task manager.',
      icon: '',
      path: '/tasks',
      color: 'bg-blue-500'
    },
    {
      title: 'Reusable Components',
      description: 'Explore our library of customizable and responsive UI components.',
      icon: '',
      path: '/components',
      color: 'bg-green-500'
    },
    {
      title: 'API Integration',
      description: 'See real API data fetching with loading states and error handling.',
      icon: '',
      path: '/api-demo',
      color: 'bg-purple-500'
    },
    {
      title: 'Dark Mode',
      description: 'Toggle between light and dark themes for comfortable viewing.',
      icon: '',
      path: '#',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16 animate-slide-in">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
          Welcome to My <span className="text-blue-500">React App</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          A modern React application built with Vite, Tailwind CSS, and React Router. 
          Featuring dark mode, responsive design, and beautiful animations.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" size="large" className="animate-bounce-in">
              Get Started
            </Button>
          </Link>
          <Link to="/components">
            <Button variant="outline" size="large">
              Explore Components
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardBody className="text-center">
                <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {feature.description}
                </p>
                <Link to={feature.path}>
                  <Button variant="outline" size="small">
                    Explore
                  </Button>
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white dark:bg-dark-200 rounded-2xl p-8 shadow-lg animate-pulse-slow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-500 dark:text-blue-400">5+</div>
            <div className="text-gray-600 dark:text-gray-400">Pages</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-500 dark:text-green-400">10+</div>
            <div className="text-gray-600 dark:text-gray-400">Components</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-500 dark:text-purple-400">3</div>
            <div className="text-gray-600 dark:text-gray-400">Hooks</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-500 dark:text-yellow-400">2</div>
            <div className="text-gray-600 dark:text-gray-400">Themes</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
